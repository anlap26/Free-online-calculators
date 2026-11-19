/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/input.css", "./**/*.html", "!./node_modules/**"],
  theme: {
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1080px"
    },
    extend: {
      colors: {
        ink: "#1c2420",
        muted: "#5c675f",
        line: "#e2d9cc",
        paper: "#f7f3ec",
        card: "#fffdf9",
        pine: "#1e3d34",
        pine2: "#2f6f5e",
        copper: "#8c4a2f",
        sand: "#efe6d6",
        warn: "#5a3b22",
        warnbg: "#fff6ea"
      },
      fontFamily: {
        sans: ['"Segoe UI"', "system-ui", "-apple-system", "sans-serif"],
        serif: ["Georgia", '"Iowan Old Style"', "Palatino", "serif"]
      },
      maxWidth: {
        page: "1080px",
        prose: "72ch"
      },
      boxShadow: {
        card: "0 1px 0 rgba(30,61,52,.04)"
      }
    }
  },
  plugins: []
};
