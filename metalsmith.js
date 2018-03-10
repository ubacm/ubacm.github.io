const Metalsmith = require('metalsmith')

const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const permalinks = require('metalsmith-permalinks')
const sass = require('metalsmith-sass')

module.exports = {
  app: Metalsmith(__dirname)
    .source('./pages')
    .destination('./dist')
    .clean(true)
    .use(markdown())
    .use(sass({
      outputDir: 'styles',
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true,
    }))
    .use(layouts({
      engine: 'handlebars',
      partials: 'layouts/partials/',
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
