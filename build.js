// @ts-check

const esbuild = require("esbuild");
const path = require("path");

/** @type {esbuild.BuildOptions} */
const buildOptions = {
  bundle: true,
  entryPoints: [path.resolve(__dirname, "./src/index.ts")],
  external: ["vscode"],
  minify: true,
  outfile: path.resolve(__dirname, "./out/index.js"),
  platform: "node",
  sourcemap: true,
  treeShaking: true,
};

(async () => {
  if (!process.argv.slice(2).includes("watch")) {
    esbuild.build(buildOptions);
  } else {
    const context = await esbuild.context(buildOptions);
    await context.watch();
  }
})();
