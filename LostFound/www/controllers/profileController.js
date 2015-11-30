angular.module( 'starter' )

	.controller( 'profileController', function( $scope, $stateParams, Items ) {
		$scope.param = $stateParams.itemId;
  	$scope.user = {
			name : "Matthew Konstantinou",
			image : "www/img/thumbnail.png",
			detail : "609-658-6542"
		};
	});
