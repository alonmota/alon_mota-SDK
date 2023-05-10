# Liblab Take home project - The Lord of the Rings SDK
The goal of this repo is to make an Sdk facilitate the consumption of liblab Lotr api


## Features
- Commit lint is enforced by using [husky](https://typicode.github.io/husky/#/) with a commit-msg hook, se [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information about naming conventions
- Code coverage is enforced at at least 90% using pre-push hook from husky, coverage is collected using [jest](https://jestjs.io/)
- Documentation is generated using [jsdoc](https://jsdoc.app/).
- Eslint and prettier are installed and using airbnb convention for style
- Module is deployed as a package on github to facilitate usage


## Quick start


### Setup
The first thing needed to install this repo in your project is to generate a git auth token. For more information on how to generate the auth token refer to: [git documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

With a token in hand define the environment variable GIT_AUTH_TOKEN using the token

```sh
export GIT_AUTH_TOKEN=<TOKEN-GOES-HERE>
```

After defining the GIT_AUTH_TOKEN variable create a file `.npmrc` in the root folder of your project, alongside you package.json

```.npmrc
//npm.pkg.github.com/:_authToken=${GIT_AUTH_TOKEN}
@alonmota:registry=https://npm.pkg.github.com

```

Also make sure your code supports modules by adding `"type": "module"` to your package.json

### Install the package 
using yarn 
```sh
yarn add @alonmota/alon_mota-sdk
```


### usage

``` file.js
// Import the LotrClient
import { LotrClient } from '@alonmota/alon_mota-sdk';
...
// instantiate the client passing your api token, (obtain the api token [here](https://the-one-api.dev/login))
const client = new LotrClient(<API-TOKEN>);
...
// Call methods from clients 
const movies = await client.movies.getAll()
const movies1 = await client.movies.getAll({ page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}})
const movie = await client.movies.getMovie('5cd95395de30eff6ebccde5d')
const quotesFromMovie = await client.movies.getMovieQuotes('5cd95395de30eff6ebccde5d')
const quotesFromMovie1 = await client.movies.getMovieQuotes('5cd95395de30eff6ebccde5d', { page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}})
const quotes = await client.quotes.getAll()
const quotes1 = await client.quotes.getAll({ page: 2, limit: 100, offset: 3, sort: { field: 'name', descending: true}})
const quote = await client.quotes.getQuote('5cd96e05de30eff6ebcce7e9')
```


### Other commands
Other useful commands.

clone the sdk: `git clone https://github.com/alonmota/alon_mota-SDK.git`

install dependencies `yarn`

To test the sdk run `yarn test`

To build the code run `yarn build`

To generate the jsdoc run `yarn doc`

To lint files run `yarn lint:fix`

### Minimalist example 
- navigate to `./example` directory containing the minimalist example
- install dependencies by running `yarn instal`
- Add your token from login at https://the-one-api.dev/login on line 5 of index.js
- run the code with `node index.js`
