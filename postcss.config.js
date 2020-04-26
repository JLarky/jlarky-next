const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./public/**/*.html', './pages/**/*.ts', './pages/**/*.tsx'],
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
