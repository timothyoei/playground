# Playground
For testing bad ideas that might be good ideas

## Setup
```bash
docker-compose -f ./docker/prod-docker-compose.yml up -d
```

```bash
docker-compose -f ./docker/prod-docker-compose.yml down --rmi all
```

## Contributing

Setup the dev container
```bash
docker-compose -f ./docker/dev-docker-compose.yml up -d
```

Tear down the dev container
```bash
docker-compose -f ./docker/dev-docker-compose.yml down --rmi all
```