angular.module( 'starter' )
	.controller( 'appController', function ( $scope, $location, $ionicSideMenuDelegate, $ionicHistory )
	{
		$scope.showBack = false;
		$scope.showsearch = false;
		$scope.showTabs = true;

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

		$scope.returnBack = function( ) {
			if( $ionicHistory.backView().stateId == "found" || $ionicHistory.backView().stateId == "lost" )
			{
				$scope.showBack = false;
				$scope.showTabs = true;
			}
			$ionicHistory.goBack();
		};

		$scope.search = function( ) {
			if ( $scope.showsearch )
			{
				window.location.href = "#/search";
				$scope.showBack = true;
				$scope.showTabs = false;
			}
			else
			{
				$scope.showsearch = true;
			}
		};

		$scope.profile = function( ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/profile";
		};

		$scope.foundDetails = function( id ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/found/"+id;
		};

		$scope.lostDetails = function( id ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/lost/"+id;
		}

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
