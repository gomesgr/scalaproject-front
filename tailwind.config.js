/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            scale: {
                '175': '1.75',
                '200': '2.00'
            },
        colors: {
            'text': '#010304',
            'background': '#e3f0f8',
            'primary': '#1f577a',
            'secondary': '#d2e7f3',
            'accent': '#338ec7',
        }
        },
        container: {
            center: true
        },
        fontFamily: {
            // 'sans': 'Exo 2',
            'sans-serif': 'Exo 2'
        }
    },
        plugins: [
        require('@tailwindcss/forms')
    ],
}

