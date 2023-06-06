# LivestreamRecorderFrontend

This is the frontend distribution for the [Recorder.moe](https://recorder.moe) livestream recorder project.

## Settings

### Hosting this project on any static web host

- Download this repository.
- Fill out your own settings in the [config.jsonc](./config.jsonc) file.
- Upload all contents to your static web host.

### Hosting on Azure Static Web Apps

- Set up github repository action secrets and follow the [github workflow](./.github/workflows/azure_static_web_apps.yml).

### Docker image

- Run this Docker image `ghcr.io/recorder-moe/livestreamrecorderfrontend`

```bash
docker run --rm -v /path/to/config.jsonc:/usr/share/nginx/html/config.jsonc:ro -p 80:80 ghcr.io/recorder-moe/livestreamrecorderfrontend
```
