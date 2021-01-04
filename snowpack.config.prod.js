/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    '@snowpack/plugin-svelte',
    [
      "@snowpack/plugin-webpack", {
        extendConfig: (config) => {
          return config;
        }
      }
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    "pdfjs-lib": "./src/pdfjs-lib.js",
    "pdfjs-web": "./src/pdfjs/web",
    "lightning-fs": "./src/lightning-fs.js",
  },
};
