// create appCal variable with the ng-app CalculatorApp
var appCal = angular.module('CalculatorApp', []);
 
// Define the Controller and implement the Scope
appCal.controller('controlCal', function($scope) {


	$scope.enteredOper='';
	$scope.totalStore = '';
	$scope.thisfunct = Math.cos(9);

	$scope.doFollowing = function(e) {
		$scope.theValue = e;
		$scope.enteredOper +=$scope.theValue;
	}
	$scope.doAdd = function() {
		$scope.totalStore = $scope.enteredOper + '+';
		$scope.enteredOper = $scope.totalStore;
	}
	$scope.doSub = function() {
		$scope.totalStore = $scope.enteredOper + '-';
		$scope.enteredOper = $scope.totalStore;
	}
	$scope.doMul = function() {
		$scope.totalStore = $scope.enteredOper + '*';
		$scope.enteredOper = $scope.totalStore;
	}
	$scope.doDiv = function() {
		$scope.totalStore = $scope.enteredOper + '/';
		$scope.enteredOper = $scope.totalStore;
	}
	$scope.doModulo = function() {
		$scope.totalStore = $scope.enteredOper + '%';
		$scope.enteredOper = $scope.totalStore;
	}
	$scope.otherRes = '';
	$scope.click = function() {
		$scope.otherRes = eval($scope.enteredOper);
		$scope.processed = $scope.enteredOper;
		$scope.enteredOper = $scope.otherRes;

	}
	$scope.floor = function() {
		$scope.enteredOper = '';
		$scope.enteredOper = 'floor(';
		$scope.enteredOper =  'Math.'+$scope.enteredOper;


	}
	$scope.roundBracketOpen = function(){
		$scope.enteredOper +='(';
	}
	$scope.roundBracketClose = function(){
		$scope.enteredOper +=')';

	}
	$scope.clear = function(){
		$scope.enteredOper ='';
	}
	$scope.doSqur = function(){
		$scope.enteredOper ='Math.pow('+$scope.enteredOper +',2)';
	}
	$scope.doPow = function(){
		$scope.enteredOper ='Math.pow('+$scope.enteredOper+',';

	}
	$scope.doE = function(){
		$scope.enteredOper ='Math.exp(1)';

	}
	$scope.do10Exp = function(){
		$scope.enteredOper +='Math.pow(10, ';

	}
	$scope.squareBracketOpen = function() {
		$scope.enteredOper +='[';
	}
	$scope.squareBracketClose = function() {
		$scope.enteredOper +=']';
	}
	$scope.inv = function() {
		$scope.click();
		$scope.enteredOper = '1/' +$scope.enteredOper;
		// $scope.click();

	}



});
