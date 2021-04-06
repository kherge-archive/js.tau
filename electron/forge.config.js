module.exports = {
  packagerConfig: {
    icon: "public/favicon",
    ignore: [
      "electron",
      "node_modules",
      "public",
      "scripts",
      "src",
      ".gitignore",
      "README.md",
      "tsconfig.json",
    ],
    platform: "all",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "js.tau",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
