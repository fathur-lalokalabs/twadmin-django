let mix = require('laravel-mix');

mix.js('src/fe/js/app.js', 'dist/js');

mix.postCss('src/fe/css/app.css', 'dist/css', [
    require('tailwindcss'),
]);