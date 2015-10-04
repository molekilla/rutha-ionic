import 'angular';

class TestController {
  hello: String;

constructor($scope: angular.IScope, $log: angular.ILogService) {
  this.hello = 'Hejsan Rutha!';
  $log.info('Test controller');
}

}
export default TestController;
