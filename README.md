[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kherge_js.tau&metric=alert_status)](https://sonarcloud.io/dashboard?id=kherge_js.tau)

# Tau

A template for creating Electron apps using React with TypeScript.

## Getting Started

First, you will need to create your project.

    yarn create tau-app my-app

(You can also use `npx`.)

    npx create-tau-app my-app

This command will create a new project using the most recent version of this template. During the creation process, you will be asked for some information about your project. This information will adjust the `package.json` file for your project.

With your new project ready, you can start working as you would with any other project created using [`create-react-app`][]. The same `react-scripts` and dependencies are used. Once you're ready to see your project in action, you can run it in Electron.

    yarn start

This command will perform a series of actions:

1. Compile `src/setupElectron.ts`.
2. Start React by using `react-scripts start`.
3. Start Electron by using `electron-forge start`.

And with that, you're all set!

- [Electron Documentation](https://www.electronjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

### Electron Main Script

The compilation of `src/setupElectron.ts` is necessary for a few of reasons.

- [Electron requires a script][] to run in its main process.
- It is written in TypeScript and Electron requires JavaScript.
- It bundles the dependencies into the script to avoid module resolution issues.

It is important to remember that by default, unlike your React app, the `src/setupElectron.ts` script does not hot reload. Electron will only load the main script once. If you are working through changes in this script, you may want to do the following:

1. Run `yarn start:react` to start React separately.
2. Run `yarn start:electron` to start Electron separately.

Using this approach, you can kill the `start:electron` task and re-run it without also restarting the React application.

[`create-react-app`]: https://create-react-app.dev/
[electron requires a script]: https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes

## Why

I wanted a quick way to use `electron-forge`, `react-scripts`, and TypeScript together. Not just for the React app, but for the Electron main script as well.

## Development

### Setup

    yarn install

Installs the dependencies needed to build te project. Yarn has been recommended in multiple points of researching Electron apps, so that recommendation is extended to this project. No support will be provided for any other package manager.

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
