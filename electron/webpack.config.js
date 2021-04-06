const path = require("path");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

// Re-use the react-scripts Webpack configuration.
const config = require("react-scripts/config/webpack.config.js")();

// ...
config.node = {
  __dirname: false,
  __filename: false,
};

// Target Node.js.
config.target = "electron-main";

// Remove the HTML plugins.
config.plugins = config.plugins.filter((plugin) => {
  const name = plugin.constructor.name;

  switch (name) {
    case "HtmlWebpackPlugin":
    case "InterpolateHtmlPlugin":
    case "ManifestPlugin":
      return false;
  }

  return true;
});

// Change the entrypoint to the Electron script.
config.entry = path.join(__dirname, "../src/setupElectron.ts");

// Output to a single file.
config.output = {
  filename: "setup.js",
  path: path.join(__dirname, "../build"),
};

// Disable chunking.
config.optimization.splitChunks = false;
config.optimization.runtimeChunk = false;

module.exports = config;
