const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: [ `src/**/*.tsx` ],
  theme: {
    fontFamily: {
      mono: [ `"Bitstream Vera Sans Mono"`, ...defaultTheme.fontFamily.mono ]
    },
    extend: {}
  },
  variants: {},
  plugins: [],
  corePlugins: {}
}
