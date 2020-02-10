exports.config = {
  projectRoot: "./src",
  projectName: "michaelsimsoe",
  outDir: "./dist/static",
  routes: {
    "/:slug": {
      type: "contentFolder",
      slug: {
        folder: "./blog"
      }
    }
  }
};
