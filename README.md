# Alice Vision Website

Alice Vision website hosted on Github

## For development

To avoid duplicated code across pages, we use javascript to load external html files.
If you are using it locally for development, you need to disable the [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy).
If you use chrome, stop all chrome instances and then run:
```bash
chromium-browser --disable-web-security --user-data-dir
```
