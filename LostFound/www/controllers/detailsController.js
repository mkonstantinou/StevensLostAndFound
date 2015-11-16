angular.module( 'starter' )
	
	.controller( 'detailsController', function( $scope, $stateParams, Items ) {
  		$scope.item = Items.get($stateParams.itemId);
	});