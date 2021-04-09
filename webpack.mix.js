const mix = require('laravel-mix');

mix.ts('resources/ts/app.ts', 'public/js').sourceMaps()
	.sass('resources/sass/app.sass', 'public/css')
	.copy('resources/woff/*.woff2', 'public/woff')
	.copy('resources/icons/*', 'public/icon')
	.copy('resources/icons/favicon.ico', 'public')
	.copy('resources/img/*', 'public/img')
	.vue()
	.extract();
