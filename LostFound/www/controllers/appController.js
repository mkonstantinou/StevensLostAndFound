angular.module( 'starter' )
	.controller( 'appController', function ( $scope, $location, $ionicSideMenuDelegate, $ionicHistory )
	{
		$scope.showBack = false;
		$scope.showsearch = false;
		$scope.showTabs = true;
		$scope.backButton = "";

		$scope.items = [
			{
				title: 'Home',
				action: 'home'
			},
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
			$scope.showBack = false;
			$scope.showTabs = true;
			if( $scope.backButton != "" )
			{
				window.location.href = "#/" + $scope.backButton;
			}
			else
			{
				window.location.href = "#/found";
			}
			$scope.backButton = "";
		};

		function setBackButton( )  {
			if( $scope.backButton == "" )
			{
				$scope.backButton = $ionicHistory.currentView().stateId;
			}
		};

		$scope.search = function( ) {
			if ( $scope.showsearch )
			{
				window.location.href = "#/search";
				$scope.showBack = true;
				$scope.showTabs = false;
				setBackButton();
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
			setBackButton();
		};

		$scope.settings = function( ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/settings";
			setBackButton();
		};

		$scope.home = function( )
		{
			$scope.returnBack();
		};

		$scope.foundDetails = function( id ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/found/"+id;
			setBackButton();
		};

		$scope.lostDetails = function( id ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/lost/"+id;
			setBackButton();
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
