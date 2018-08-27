# create-gen3-app
Create Gen3 apps without configuration.

# Creating your own app
Clone this repository and then run `npm run initialize {my-repo-name}.` 
In the directory above this repository, there will be a boilerplate app created with the name `{my-repo-name}`.
It will automatically run, and can be run with `npm start`.

# Running with Dockerfile

Clone this repo and then:
`docker build -t cga .`
`docker run --rm -ti -p 3000:3000 cga`

then navigate to http://localhost:3000

