angular.module( 'starter' )
	.controller( 'homeController', function ( $scope ) 
	{
		$scope.list = [
        {
			title:'Item 1',
			detail:'Detail 1',
			image: 'www/img/thumbnail.png'
			},
        {
			title:'Item 2',
			detail:'Detail 2',
			image: 'www/img/thumbnail.png'
			},
        {
			title:'Item 3',
			detail:'Detail 3',
			image: 'www/img/thumbnail.png'
			}
    ];
	});
	
