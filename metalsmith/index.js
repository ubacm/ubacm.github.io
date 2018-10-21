const browserSync = require('metalsmith-browser-sync')

const metalsmith = require('./metalsmith')
const res = require('../res')

metalsmith.app.use(
  browserSync({
    server: {
      baseDir: res.DIST,
      index: 'index.html',
    },
    files: ['src/site/**/*.*'],
  })
)

metalsmith.build(metalsmith.app)
