const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.indigo,
				success: colors.green,
				danger: colors.red,
				info: colors.purple,
				warning: colors.yellow,
			},
			keyframes: {
				'spin-reverse': {
					from: { transform: 'rotate(360deg)' },
					to: { transform: 'rotate(0deg)' },
				}
			},
			animation: {
				'spin-reverse': 'spin-reverse 1s linear infinite',
			},
		},
	},
	variants: {
		extend: {
			ringWidth: ['hover']
		},
	},
	plugins: [],
};
