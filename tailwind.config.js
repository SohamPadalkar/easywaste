/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["Orbitron", "sans-serif"], // for headings
                body: ["Poppins", "sans-serif"],    // for normal text
            },
            colors: {
                ecoGreen: "#00FF66",
            },
        },
    },
    plugins: [],
}
