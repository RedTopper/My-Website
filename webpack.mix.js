const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
	resolve: {
		alias: {
			'@vue': path.resolve(__dirname, 'resources/vue'),
			'@ts': path.resolve(__dirname, 'resources/ts')
		}
	}
})
	.ts('resources/ts/app.ts', 'public/js').sourceMaps()
	.sass('resources/sass/app.sass', 'public/css')
	.copy('resources/woff/*.woff2', 'public/woff')
	.copy('resources/icons/*', 'public/icon')
	.copy('resources/icons/favicon.ico', 'public')
	.copy('resources/img/*', 'public/img')
	.copy('resources/img/projects/*', 'public/img/projects')
	.vue()
	.extract();
