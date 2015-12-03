angular.module( 'starter' )

	.controller( 'detailsController', function( $scope, $stateParams, $window, Items ) {
		$scope.param = $stateParams.itemId;
  	$scope.item = Items.get(parseInt($stateParams.itemId));
		$scope.height = $window.innerHeight * .8;
		$scope.width = $window.innerWidth * .8;

		$scope.imageScaler = function( ){
			var render = new FileReader();
			console.log( $scope.item.image );
			render.readAsDataURL( $scope.item.image );
		};
	});
