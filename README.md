[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# moleculer-demo-cron
An example project for Ash49

## Usage
Start the project with `npm run dev` command. 
In the terminal, try the following commands:

- `call receiver.receive` - Start the `JobHelloWorld` job. `HELLO` should be printed to the console every 1 minute

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
