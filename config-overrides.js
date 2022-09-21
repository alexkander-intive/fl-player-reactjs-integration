module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    // ...add your webpack config
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          // But in mi case I paste
          // buffer: require.resolve("buffer"),
          crypto: "crypto-browserify",
          stream: "stream-browserify",
          // 'fl-player': require.resolve('./src/third-party/fl-player-es6/fl-player.es.js'),
          // 'fl-player-interface': require.resolve('./src/third-party/fl-player-es6/fl-player-interface.es.js'),
          // 'fl-foundation': require.resolve('./src/third-party/fl-player-es6/fl-foundation.es.js'),
        }
      }
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function(paths, env) {
    // ...add your paths config
    return paths;
  },
}
