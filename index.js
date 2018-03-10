const browserSync = require('metalsmith-browser-sync')
const metalsmith = require('./metalsmith')

metalsmith.app.use(browserSync({
    server: {
      baseDir: './dist',
      index: 'index.html',
    },
    files: ['src/**/*.*', 'layouts/**/*.html'],
  }))

metalsmith.build(metalsmith.app)
