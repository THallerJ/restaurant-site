/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#252A34",
				primary: "#FF2E63",
				secondary: "#08D9D6",
				third: "#C0DBEA",
				fourth: "#E9B9D2",
				offwhite: "#E8F3F1",
				accent: "#EAD1D9",
			},
			screens: {
				xs: "450px",
				sm: "640px",
				md: "867px",
				lg: "1024px",
				xl: "1280px",
				xxl: "1536px",
			},
			fontFamily: {
				prompt: ["Prompt", "sans-serif"],
				bebas: ["Bebas Neue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
