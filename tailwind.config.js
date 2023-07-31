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
            'text': '#0b240a',
            'background': '#fbfefb',
            'primary': '#272d90',
            'secondary': '#d5f3d3',
            'accent': '#c4363d',
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

