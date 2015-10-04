/*globals System:true*/
// Configure module loader
System.config({
    baseURL: 'www/',
    defaultJSExtensions: true,
    transpiler: "none",
    meta: {
        '**/*.html': {
            loader: 'text'
        }
    },
    map: {
        'text': 'systemjs.text.js',
        'templates': 'js/templates.js',
        'restangular': 'components/restangular/dist/restangular.js',
        'angular': 'components/angular/angular.js',
        'underscore': 'components/underscore/underscore.js',
        'angular-route': 'components/angular-route/angular-route.js'
    }
});
