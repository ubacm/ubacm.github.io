const browserSync = require('metalsmith-browser-sync')
const metalsmith = require('./metalsmith')

const path = require('path')

metalsmith.app.use(browserSync({
    server: {
      baseDir: path.resolve(__dirname, '..', 'dist'),
      index: 'index.html',
    },
    files: ['src/**/*.*'],
  }))

metalsmith.build(metalsmith.app)
