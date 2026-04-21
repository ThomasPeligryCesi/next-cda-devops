import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
  },
  component: {
    devServer: {
      module: "es2015",
      framework: "next",
      bundler: "webpack",
    },
  },
});