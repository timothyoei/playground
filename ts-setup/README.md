# TypeScript Setup

## Setup
Start dev container
```bash
docker-compose up -d
```

Then attach to the container using [vscode's dev container extension](https://code.visualstudio.com/docs/devcontainers/containers)

When finished with the container, you can clean it and the generated images / networks with the command below
```bash
docker-compose down --rmi all
```