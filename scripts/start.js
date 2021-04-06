const concurrently = require("concurrently");

const commands = [
  {
    command: "npm:start:react",
    name: "React",
    prefixColor: "blue",
  },
  {
    command: "npm:start:electron",
    name: "Electron",
    prefixColor: "magenta",
  },
];

const options = {
  killOthers: ["success", "failure"],
  prefix: "[{name} @ {time}]",
  timestampFormat: "HH:mm:ss.SSS",
};

/**
 * Checks the results of each command for non-zero exit code.
 *
 * This function will iterate through all of the command results, check the `exitCode` for each
 * one. If an exit status is both a number and greater than zero, the command is considered to
 * have exited abnormally and should be considered a failure. Any other condition is assumed to
 * be a normal exit as `concurrently` is configured to kill any process once any one exits,
 * gracefully or otherwise.
 *
 * @param {ExitInfos} results The command results.
 */
const checkError = (results) => {
  for (const result of results) {
    if (!isNaN(result.exitCode) && result.exitCode > 0) {
      process.exit(1);
    }
  }
};

concurrently(commands, options).catch(checkError);
