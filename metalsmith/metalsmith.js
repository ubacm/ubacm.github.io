const Metalsmith = require('metalsmith')

const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const permalinks = require('metalsmith-permalinks')
const sass = require('metalsmith-sass')

const path = require('path')

const SRC = path.resolve(__dirname, '..', 'src')

module.exports = {
  app: Metalsmith(__dirname)
    .source(path.resolve(SRC, 'pages'))
    .destination(path.resolve(__dirname, '..', 'dist'))
    .clean(true)
    .use(markdown())
    .use(sass({
      outputDir: 'styles',
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true,
    }))
    .use(layouts({
      directory: path.resolve(SRC, 'layouts'),
      engine: 'handlebars',
      partials: path.resolve(SRC, 'layouts', 'partials'),
      rename: true,
    }))
    .use(permalinks({
      relative: false,
    })),

  build: app => {
    app.build(err => {
      if (err) throw err
      return true
    })
  }
}
