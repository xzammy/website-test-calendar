module.exports = {
    entry:  './src/CalendarComponent.js',
    output: {
      filename: './dist/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }
  