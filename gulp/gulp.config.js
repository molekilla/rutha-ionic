module.exports = function(){
	var src = './src/';
	var build = './www/';
	var temp = './.tmp/';

	var config = {
		/* Main Paths */
		src: src,
		temp: temp,
		build: build,
		copyAssets: {
            index: src + 'app/index.html',
            images: src + 'app/img/**',
            fonts: src + 'app/fonts/**',
            assets: src + 'assets/**'
        },

		allSass: src + 'app/scss/ionic.app.scss',

		concatDev:   ['src/app/app.js',
                      'src/app/common/global/*.js',
                      'src/app/common/models/*.js',
                      'src/app/common/services/*.js',
                      'src/app/common/controllers/*.js',
                      'src/app/common/directives/*.js',
                      'src/app/common/**/*.js',
                      'src/app/**/*.js'],


        templates: src + 'app/**/*.html',

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'rutha.templates',
                standAlone: false,
                root: 'app'
            },
			path: 'js'
        },

		defaultPort: 3000

	};


	return config;
};
