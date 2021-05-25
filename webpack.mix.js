let mix = require('laravel-mix');

let staticPath = "static/build";
let resourcesPath = "src/fe";

// compile

mix.js(`${resourcesPath}/js/app.js`, `${staticPath}/js`);

mix.scripts(`${resourcesPath}/js/admin`, `${staticPath}/js/admin.js`);

mix.postCss(`${resourcesPath}/css/app.css`, `${staticPath}/css`, [
    require('tailwindcss'),
]);