# ssv-au-ui-dojo
Playground/dojo for sketch7 aurelia.

# Getting started

## Run via Docker
```
docker pull claylaut/ssv-ui-dojo && docker run -p 9000:9000 claylaut/ssv-ui-dojo
```
access: http://localhost:9000/

or 

git clone this project
run  `docker-compose up`
access: http://localhost:9000/

## Setup Machine for Development
Install/setup the following:

- NodeJS v8+
- Visual Studio Code or similar code editor
- TypeScript 2.5+
- Git + SourceTree, SmartGit or similar (optional)
- Ensure to install **global NPM modules** using the following:

```shell
npm install -g git gulp yarn
```

### Project Setup
for automated setup run `./setup.ps1`.

### Manual Setup
- Run `npm install`
- Run `npm start`
- Create symbolic link of `/node_modules` to `wwwroot/node_modules`

## Commands

```shell
# build for dev
npm run build

# run server for dev
npm start
```
