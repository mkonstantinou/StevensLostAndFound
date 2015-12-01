angular.module( 'starter' )
	.controller( 'appController', function ( $scope, $location, $ionicSideMenuDelegate, $ionicHistory )
	{
		var backTitles = [];
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
			$ionicHistory.goBack();
			var back = $ionicHistory.backView();
			if( back.stateId == "found" || back.stateId == "lost" )
			{
				$scope.showBack = false;
				$scope.showTabs = true;
				backTitles.pop();
			}
			else
			{
				setBackButtonText( backTitles[backTitles.length-2] );
				backTitles.pop();
			}
		};

		setBackButtonText = function( text ) {
			document.getElementById("backButton").innerHTML = text;
		};

		$scope.search = function( ) {
			if ( $scope.showsearch )
			{
				window.location.href = "#/search";
				$scope.showBack = true;
				$scope.showTabs = false;
				backTitles.push( $ionicHistory.currentView().title );
				setBackButtonText( backTitles[backTitles.length-1] );
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
			backTitles.push( $ionicHistory.currentView().title );
			setBackButtonText( backTitles[backTitles.length-1] );
		};

		$scope.foundDetails = function( id ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/found/"+id;
			backTitles.push( $ionicHistory.currentView().title );
			setBackButtonText( backTitles[backTitles.length-1] );
		};

		$scope.lostDetails = function( id ) {
			$scope.showBack = true;
			$scope.showTabs = false;
			window.location.href = "#/lost/"+id;
			backTitles.push( $ionicHistory.currentView().title );
			setBackButtonText( backTitles[backTitles.length-1] );
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
