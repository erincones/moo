const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: [ `src/**/*.tsx` ],
  theme: {
    fontFamily: {
      mono: [ `"Bitstream Vera Sans Mono"`, ...defaultTheme.fontFamily.mono ]
    },
    colors: {
      transparent:     `transparent`,
      black:           `#000000`,
      white:           `#FFFFFF`,
      gray:            `#AAAAAA`,
      red:             `#AA0000`,
      green:           `#00AA00`,
      yellow:          `#AA5500`,
      blue:            `#0000AA`,
      magenta:         `#AA00AA`,
      cyan:            `#00AAAA`,
      "red-light":     `#FF5555`,
      "green-light":   `#55FF55`,
      "yellow-light":  `#FFFF55`,
      "blue-light":    `#5555FF`,
      "magenta-light": `#FF55FF`,
      "cyan-light":    `#55FFFF`
    },
    extend: {}
  },
  variants: {},
  plugins: [],
  corePlugins: {}
}
