# create-gen3-app
Create Gen3 apps without configuration.

# Without cloning:
Run `npx @gen3/create-app {my-new-repo-name}`
Then run `cd {my-new-repo-name}` and `npm start` to run the new app locally.

# With cloning the repo:
## Running with npm
Clone this repository and then run `npm run initialize {my-new-repo-name}`
In the directory above this repository, there will be a boilerplate app created with the name `{my-repo-name}`.
It can be run with `npm start`.

## Running with Dockerfile

Clone this repo and then:
`docker build -t cga .`
`docker run --rm -ti -p 3000:3000 cga`

then navigate to http://localhost:3000
