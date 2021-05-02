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
	.copy('resources/icons/favicon.ico', 'public')

	.copy('resources/woff/*.woff2', 'public/woff')
	.copy('resources/icons/*', 'public/icon')
	.copy('resources/img/*', 'public/img')

	.copy('resources/img/super-haxagon/*', 'public/img/super-haxagon')
	.copy('resources/img/my-website/*', 'public/img/my-website')
	.copy('resources/img/click-net/*', 'public/img/click-net')
	.copy('resources/img/hidden-perspective/*', 'public/img/hidden-perspective')
	.copy('resources/img/archangel-stats/*', 'public/img/archangel-stats')
	.copy('resources/img/rubric-pro/*', 'public/img/rubric-pro')
	.copy('resources/img/midi-factorio/*', 'public/img/midi-factorio')
	.copy('resources/img/steamworks-2017/*', 'public/img/steamworks-2017')

	.vue()
	.extract();
