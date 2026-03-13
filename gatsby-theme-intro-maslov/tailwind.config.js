const color = require("color")

module.exports = theme => {
  const colors =
    typeof theme === "string" ? require(`./src/themes/${theme}`) : theme

  return {
    content: {
      content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
      options: {
        safelist: [/^text-skill/, /^border-skill/],
      },
    },
    theme: {
      fontFamily: {
        header: ["Source Sans Pro", "sans-serif"],
        text: ["Roboto", "sans-serif"],
      },
      extend: {
        colors: {
          ...colors,
          "back-light": color(colors.back)
            .lighten(0.18)
            .hex(),
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          "14": "3.5rem",
        },
        animation: {
          'spin-slow': 'rotate360 3s linear infinite',
        },
        keyframes: {
          rotate360: {
            '0%': {transform:'rotate(0deg)'},
            '100%': {transform:'rotate(360deg)'},
          },
        },
      },
    },
  }
}
