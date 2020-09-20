module.exports = {
  experimental: {
    uniformColorPalette: true,
    applyComplexClasses: true
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  variants: {},
  plugins: []
}
