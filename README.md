# rutha-ionic
## an hapi/angular frontend boilerplate for Ionic
**Ru** le 
**T** hem 
**H** apiJS 
**A** ngularJS

[![Build Status](https://travis-ci.org/molekilla/rutha.svg?branch=master)](https://travis-ci.org/molekilla/rutha)

Pure pragmatic NodeJS stack

#### Changelog: [changelog](changelog.md)

#### Last update: 0.2.0

#### Docs:

* [rutha - A Hapi and Angular boilerplate stack - English](http://yoworkeo.blogspot.com/2015/02/rutha-hapi-and-angular-boilerplate-stack.html)
* [Hapi View Partials - Spanish](http://yoworkeo.blogspot.com/2014/08/hapijs-view-partials-con-underscorejs.html)
* [Hapi REST Authentication - Spanish](http://yoworkeo.blogspot.com/2014/08/hapijs-autenticacion-rest-con-hapi-auth.html)
* [Hapi Tutorials](http://hapijs.com/tutorials)
* [BabelJS: Learn ES6](https://babeljs.io/docs/learn-es6/)
* [ECMAScript6 by Luke Hoban](https://github.com/lukehoban/es6features)
* [Typescript](http://www.typescriptlang.org/)
* [Taming Angular 1.3 forms by Year of Moo](http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html#html5-validators-and-parse-errors)
* [Jasmine BDD Introduction](http://jasmine.github.io/2.2/introduction.html)

### Main features ###

* **Rule Them All with a single environment**: Both development and production environment are the same. We concat, annotate, mix some ingredients and offer you the same production environment for development.
* **Ionic 1.0.0**
* **Hapi 8.0.0**


## Installing
1. Clone repo
2. Rename text containing `rutha` to `your_app_name`
3. Use node 0.10.x or 0.12.x
4. Run `npm install grunt-cli -g`
5. Run `npm install` and then `bower install`
6. Run `grunt ionic`
6. Open a new tab run `ionic serve`


## Grunt Help - Frontend tasks

* `grunt ionic`: Serves frontend service with no auto reload for Ionic
* `grunt spec`: Runs jshint and server side / UI specs
* `grunt test`: Runs E2E/Functional tests (Angular)
* `grunt build`: Prepares UI assets
* `grunt stagelocal`: Provisions Vagrant VM
* `grunt staging`: Provisions staging
* `grunt deploy`: Provisions production
* `grunt jshinting`: Verifies javascript using jshint
* `grunt auditpkg`: Verifies modules that contains security issues


### Maintainers, notes ###
Maintain by Rogelio Morrell C. 
Pull Request are welcome but I might not turn around those quickly. 

### Disclaimer ###
Feel free to fork.
