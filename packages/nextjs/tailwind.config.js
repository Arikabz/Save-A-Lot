/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("daisyui")],
    darkTheme: "scaffoldEthDark",
    // DaisyUI theme colors
    daisyui: {
        themes: [
            {
                scaffoldEth: {
                    "primary":  "#dc2626",

                    "secondary": "#f97316",

                    "accent": "#facc15",

                    "neutral": "#fb923c",

                    "base-100": "#f3f4f6",

                    "info": "#a16207",

                    "success": "#84cc16",

                    "warning": "#f59e0b",

                    "error": "#991b1b",
                    "neutral-content": "#ffffff",
                    "base-200": "#f4f8ff",
                    "base-300": "#DAE8FF",
                    "base-content": "#212638",
                    "--rounded-btn": "9999rem",

                    ".tooltip": {
                        "--tooltip-tail": "6px",
                    },
                },
            },
            {
                scaffoldEthDark: {
                    "primary":  "#dc2626",

                    "secondary": "#f97316",

                    "accent": "#facc15",

                    "neutral": "#fb923c",

                    "base-100": "#111827",

                    "info": "#a16207",

                    "success": "#84cc16",

                    "warning": "#f59e0b",

                    "error": "#991b1b",
                    "neutral-content": "#385183",
                    "base-200": "#2A3655",
                    "base-300": "#212638",
                    "base-content": "#F9FBFF",

                    "--rounded-btn": "9999rem",

                    ".tooltip": {
                        "--tooltip-tail": "6px",
                        "--tooltip-color": "hsl(var(--p))",
                    },
                },
            },
            {
                exampleUi: {
                    primary: "#000000",
                    "primary-content": "#ffffff",
                    secondary: "#FF6644",
                    "secondary-content": "#212638",
                    accent: "#93BBFB",
                    "accent-content": "#212638",
                    neutral: "#f3f3f3",
                    "neutral-content": "#212638",
                    "base-100": "#ffffff",
                    "base-200": "#f1f1f1",
                    "base-300": "#d0d0d0",
                    "base-content": "#212638",
                    info: "#93BBFB",
                    success: "#34EEB6",
                    warning: "#FFCF72",
                    error: "#FF8863",

                    "--rounded-btn": "9999rem",

                    ".tooltip": {
                        "--tooltip-tail": "6px",
                    },
                },
            },
        ],
    },
    theme: {
        // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
        extend: {
            fontFamily: {
                "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
            },
            boxShadow: {
                center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
            },
            keyframes: {
                grow: {
                    "0%": {
                        width: "0%",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
                zoom: {
                    "0%, 100%": { transform: "scale(1, 1)" },
                    "50%": { transform: "scale(1.1, 1.1)" },
                },
            },
            animation: {
                grow: "grow 5s linear infinite",
                "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                zoom: "zoom 1s ease infinite",
            },
        },
    },
};
