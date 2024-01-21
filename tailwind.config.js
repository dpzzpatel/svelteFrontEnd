/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				offBlack: 'hsl(0, 0%, 8%)', // Define the Off Black color
				DarkGrey: 'hsl(0, 0%, 12%)',
				White: 'hsl(0, 0%, 100%)',
				Grey: 'hsl(0, 0%, 20%)',
				Green: 'hsl(75, 94%, 57%)'
			},
			cursor: {
				hover: 'text-black' // Use 'text-black' to set a black pointer
			}
		}
	},
	plugins: []
};
