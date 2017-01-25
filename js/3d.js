// The detector will show a warning if the current browser does not support WebGL.
if (!Detector.webgl) {
	Detector.addGetWebGLMessage();
}

// All of these variables will be needed later, just ignore them for now.
var container, stats;
var camera, controls, scene, renderer;
var lighting, ambient, keyLight, fillLight, backLight;
var windowHalfX;
var windowHalfY;
var objMaterials = {};
var id = 0;

init();
animate();

function init() {
	//container = document.createElement('div');
	container = document.getElementById('scene');
	//document.body.appendChild(container);

	windowHalfX = container.offsetWidth / 2;
	windowHalfY = container.offsetHeight / 2;

    // Camera
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 2000);
    camera.position.z = 250;

	// Scene
	scene = new THREE.Scene();
	ambient = new THREE.AmbientLight(0xffffff, 1.0);
	scene.add(ambient);

	// Lights
	keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
	keyLight.position.set(-100, 0, 100);

	fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
	fillLight.position.set(100, 0, 100);

	backLight = new THREE.DirectionalLight(0xffffff, 1.0);
	backLight.position.set(100, 0, -100).normalize();

	scene.add(keyLight);
	scene.add(fillLight);
	scene.add(backLight);

	// Model


	//texture

	var manager = new THREE.LoadingManager();
	manager.onProgress = function(item, loaded, total){
		console.log(item,loaded,total);
	};

	//var texture = new THREE.Texture();

	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) {
	};
	/*
	var loader = new THREE.ImageLoader( manager );
	loader.load( 'assets/lincoln.jpg', function ( image ) {
		texture.image = image;
		texture.needsUpdate = true;
	} );*/

	// model

	  //objMaterials[0] = child.material;	
	objMaterials[1] = new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.SmoothShading }  ); 
	objMaterials[2] = new THREE.MeshPhongMaterial( { color: 0xFF0000, specular: 0x009900, shininess: 30, shading: THREE.FlatShading }   ); 
	objMaterials[3] = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending }  );
	objMaterials[4] = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe : true  }  );


	var loader = new THREE.OBJLoader( manager );
	loader.load( 'assets/lincoln.obj', function ( object ) {
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
					child.material = objMaterials[1];
				}
			} );
			object.position.y = - 95;
			scene.add( object );
	}, onProgress, onError );

	/*
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};

	
	var onError = function ( xhr ) { };
	THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath( 'assets/' );
	mtlLoader.load( 'lincoln.mtl', function( materials ) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.setPath( 'assets/' );
		objLoader.load( 'lincoln.obj', function ( object ) {
			object.position.y = - 95;
			scene.add( object );
		}, onProgress, onError );
	});*/



	

	// Render
	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setPixelRatio(container.devicePixelRatio);
	renderer.setSize(container.offsetWidth, container.offsetHeight);
	renderer.setClearColor( 0x000000, 0);

	container.appendChild(renderer.domElement);

	// Controls 
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;

    // Events 
    window.addEventListener('resize', onWindowResize, false);
   // window.addEventListener('keydown', onKeyboardEvent, false);

  


}


function onWindowResize() {
	windowHalfX = container.offsetWidth / 2;
	windowHalfY = container.offsetHeight / 2;
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(container.offsetWidth, container.offsetHeight);
}
function onKeyboardEvent(e) {
	 if(e.code === 'KeyT'){				
			if(id < 4){
				id++;
				changeMaterial(id);				
			}
		}
		else if(id == 4){
				id = 1;
				changeMaterial(id);
		}
		
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	render();
}
function render() {
	renderer.render(scene, camera);
}


function changeMaterial(id){
	child.material = materials[id];
}