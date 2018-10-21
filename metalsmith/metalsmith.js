const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const permalinks = require('metalsmith-permalinks')
const sass = require('metalsmith-sass')
const path = require('path')
const res = require('../res')

module.exports = {
  app: Metalsmith(__dirname)
    .source(path.resolve(res.SITE_SRC, 'pages'))
    .destination(res.DIST)
    .clean(false)
    .use(markdown())
    .use(
      sass({
        outputDir: 'styles',
        outputStyle: 'compressed',
        sourceMap: true,
        sourceMapContents: true,
      })
    )
    .use(
      layouts({
        directory: path.resolve(res.SITE_SRC, 'layouts'),
        engine: 'handlebars',
        partials: path.resolve(res.SITE_SRC, 'layouts', 'partials'),
        rename: true,
      })
    )
    .use(
      permalinks({
        relative: false,
      })
    ),

  build: app => {
    app.build(err => {
      if (err) throw err
      return true
    })
  },
}
