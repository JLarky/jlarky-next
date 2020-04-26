const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./{components,lib,pages,posts,public}/**/*.{html,ts,tsx,md}'],
    defaultExtractor: content => content.match(/[A-Za-z0-9_\-:./]+/g) || []
  }
]

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
