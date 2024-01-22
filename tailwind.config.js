/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: {
                    bg: "#212121",
                    cvr: "#313131",
                    btn: "#373737",
                    inp: "#121212",
                    hvr: "#444444",
                    clr: "#ffffff",
                    txt: "#8A8A8A"
                }
            }
        },
    },
    plugins: [],
}

