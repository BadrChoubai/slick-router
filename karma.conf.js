/**
 * Run karma start --no-coverage to get non instrumented code to show up in the dev tools
 */

var webpackConfig = require('./webpack.config')

function config (c) {
  return {

    frameworks: ['mocha', 'effroi'],

    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap']
    },

    files: [
      'tests/index.js'
    ],

    reporters: c.coverage ? ['progress', 'coverage'] : ['progress'],

    // this watcher watches when bundled files are updated
    autoWatch: true,

    webpack: Object.assign(webpackConfig, {
      entry: undefined,
      // this watcher watches when source files are updated
      watch: true,
      devtool: 'inline-source-map',
      module: Object.assign(webpackConfig.module, {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015'],
                  plugins: ['transform-runtime', 'transform-async-to-generator']
                }
              }
            ]
          },
          c.coverage ? {
            enforce: 'post',
            test: /\.js/,
            exclude: /(test|node_modules)/,
            loader: 'istanbul-instrumenter-loader'
          } : {}
        ]
      })
    }),

    webpackServer: {
      noInfo: true
    },

    client: {
      useIframe: true,
      captureConsole: true,
      mocha: {
        ui: 'qunit'
      }
    },

    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    browserNoActivityTimeout: 30000,

    coverageReporter: c.coverage ? {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text-summary'}
      ]
    } : {}
  }
}

module.exports = function (c) {
  c.coverage = c.coverage !== false
  c.set(config(c))
}

module.exports.config = config
