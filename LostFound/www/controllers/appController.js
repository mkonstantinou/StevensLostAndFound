angular.module( 'starter' )
	.controller( 'appController', function ( $scope, $location, $ionicSideMenuDelegate )
	{
		$scope.showtitle = false;
		$scope.showsearch = false;

		$scope.items = [
			{
				title: 'Profile',
				action: '../profile'
			},
			{
				title: 'Your posts',
				action: 'profile/posts'
			},
			{
				title: 'Messages',
				action: 'profile/messages'
			},
			{
				title: 'Settings',
				action: '../settings'
			}
		];

		$scope.toggleLeft = function( ) {
			$ionicSideMenuDelegate.toggleLeft();
		};

		$scope.search = function( ) {
			if ( $scope.showsearch )
			{
				window.location.href = "#/search";
			}
			else
			{
				$scope.showtitle = false;
				$scope.showsearch = true;
			}
		};

		$scope.gosearch = function( ) {
			$location.path('search');
		};

		$scope.cancelsearch = function( ) {
			$scope.showtitle = true;
			$scope.showsearch = false;
		};

	})
	.service( 'SearchService', function( $q ) {
		var Search = {};
		Search.terms = [];
		return Search;
	} );
