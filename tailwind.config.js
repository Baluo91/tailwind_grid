module.exports = {
  purge: {
		enabled: false,
		content: [
			"./src/*.html",
		]
	},
  darkMode: false,
  theme: {
    extend: {
			screens: {
				'sm': '420px',
			},
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}