/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                primary_alt: '#2dd4bf',
                secondary: '#64748b',
                dark: '#0f172a',
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
