# create-gen3-app
Create Gen3 apps without configuration.

# Without cloning (*recommended*):
Run the following commands:
```
npx @gen3/create-app {my-new-repo-name}`
cd {my-new-repo-name}
npm start
```

If you encounter an error similar to the following:
```
There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.
```

This can be fixed with:
`export SKIP_PREFLIGHT_CHECK=true`

# With cloning the repo:
## Running with npm
Clone this repository and then run the following commands from the repo:
```
npm install
npm run create-gen3-app {my-new-repo-name}
```
Within the repository, there will be a boilerplate app created with the name `{my-repo-name}`.
It can be run with `npm start`.

## Running with Dockerfile

Clone this repo and then:
```
npm install
docker build -t cga .`
docker run --rm -ti -p 3000:3000 cga
```

then navigate to http://localhost:3000

# Configuration for logging into commons
There is some example configuration for connecting to commons in `src/config.js`. The authorization url for a commons must be specified, and an environment variable for that commons set with the client ID needed for Fence. 
