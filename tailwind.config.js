/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
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
            boxShadow: {
                'header-shadow': 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
