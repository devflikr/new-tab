import defaultTheme from "tailwindcss/defaultTheme"

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
                    blk: "#0D0D14",
                    blg: "#727888",
                    ple: "#8E22FF",
                    red: "#D53933",
                    slt: "#1B1B25",
                    cvr: "#313141",
                    btn: "#373737",
                    inp: "#121212",
                    hvr: "#444444",
                    clr: "#ffffff",
                    hlg: "#bfbfbf",
                    txt: "#8A8A8A"
                }
            },
            fontFamily: {
                'outfit': ['"OutFit"', ...defaultTheme.fontFamily.serif],
                'work': ['"Work Sans"', ...defaultTheme.fontFamily.serif],
                'titans': ['"SL Titans"', ...defaultTheme.fontFamily.serif],
                'sono': ['"Sono"', ...defaultTheme.fontFamily.mono],
            }
        },
    },
    plugins: [],
}

