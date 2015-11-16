angular.module( 'starter' )
	.controller( 'appController', function ( $scope, $ionicSideMenuDelegate ) 
	{
		$scope.items = [
			{
				title: 'Profile',
				action: 'profile'
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
				action: 'settings'
			}
		];
		
		$scope.toggleLeft = function( ) {
			$ionicSideMenuDelegate.toggleLeft();
		};
		
	});

	