module.exports = {
  experimental: {
    defaultLineHeights: true,
    uniformColorPalette: true,
    applyComplexClasses: true
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.md'
  ],
  theme: {},
  variants: {},
  plugins: []
}
