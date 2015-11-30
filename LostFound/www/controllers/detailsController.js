angular.module( 'starter' )

	.controller( 'detailsController', function( $scope, $stateParams, Items ) {
		$scope.param = $stateParams.itemId;
  	$scope.item = Items.get($stateParams.itemId-1);
	});
