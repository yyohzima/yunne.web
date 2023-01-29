### Docker

local build

```sh
docker build -t yunne-web-docker .
docker run -p 3000:3000 yunne-web-docker
```

debug build

```sh
docker build . --progress plain --no-cache -t yunne-web-docker
```