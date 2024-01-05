
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/src/pages/index.js")),
  "component---src-pages-page-slug-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/src/pages/{Page.slug}.js")),
  "slice---src-components-footer-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/src/components/footer.js")),
  "slice---src-components-header-js": preferDefault(require("/Users/jeldonmusic/Documents/Web/headishere/headisheere/src/components/header.js"))
}

