/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
        './components/**/*.{js,jsx,ts,tsx,md,mdx}',
        './theme.config.jsx' // Include theme config for any custom classes
    ],
    theme: {
        extend: {}
    },
    plugins: []
}
