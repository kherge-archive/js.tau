# Tau

A template for creating Electron apps using React with TypeScript.

## Development

### Setup

    yarn install

Installs the dependencies needed to build te project. Yarn has been recommended in multiple
points of researching Electron apps, so that recommendation is extended to this project. No support
will be provided for any other package manager.

### Building

    yarn build

Builds the optimized React application and then packages it using Electron.

    yarn build:react

> See [react-scripts build][] and [electron-forge package][] for details.

Only builds the optimized React application.

    yarn build:electron

Only packages the already built React application.

[react-scripts build]: https://create-react-app.dev/docs/available-scripts/#npm-run-build
[electron-forge package]: https://www.electronforge.io/cli#package

### Releasing

    yarn release

Builds the optimized React application and then generates distributables for it.

> See [electron-forge make][] for details.

[electron-forge make]: https://www.electronforge.io/cli#make

### Running Locally

    yarn start

Starts the React application and launches Electron.

> See [react-scripts start][] and [electron-forge start][] for details.

[react-scripts start]: https://create-react-app.dev/docs/available-scripts/#npm-start
[electron-forge start]: https://www.electronforge.io/cli#start

### Running Tests

    yarn test

Runs all of the test files named `*.test.js`.

> See [react-scripts test][] for details.

[react-scripts test]: https://create-react-app.dev/docs/available-scripts/#npm-test

## License

This application and its source is made available under the ISC license.

### Other

"[proton particle](https://thenounproject.com/eucalyp/collection/nuclear-element-glyph/?i=2256984)" by Eucalyp is licensed under CC BY 3.0.
