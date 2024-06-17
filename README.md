# LivestreamRecorderFrontend

This is the frontend distribution for the [Recorder.moe](https://recorder.moe) livestream recorder project.

## Settings

### Hosting this project on any static web host

- Download this repository.
- Fill out your own settings in the [config.jsonc](./config.jsonc) file.
- Upload all contents to your static web host.

### Hosting on Azure Static Web Apps

- Set up github repository action secrets and follow the [github workflow](./.github/workflows/azure_static_web_apps.yml).

### Hosting on GitHub Pages

- Fork this repository.
- Fill out your own settings in the [config.jsonc](./config.jsonc) file.
- Enable GitHub Pages in the repository settings.
- Set the GitHub Pages source to the `master` branch.
- ***Setup Custom Domain!!!***\
  This app cannot run at a domain like `https://username.github.io/LivestreamRecorderFrontend_dist/`.\
  It must run at the root of the domain, like `https://your.recorder.moe/`.

### Docker image

- Run the docker image with config.jsonc mounted to `/usr/share/nginx/html/config.jsonc`.

  ```bash
  docker run -v /path/to/config.jsonc:/usr/share/nginx/html/config.jsonc:ro -p 80:8080 ghcr.io/recorder-moe/livestreamrecorderfrontend
  ```

- The Nginx server will listen on port 80, so you can access it at `http://localhost:80`.
- Also check the `http://localhost:80/config.jsonc` to make sure the config is loaded correctly.
