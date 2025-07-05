module.exports = {
    content: [
        "./src/**/*.{js,astro}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                'title': ['ClashDisplay', 'system-ui', '-apple-system', 'sans-serif']
            },
        },
    },
}