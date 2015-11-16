angular.module( 'starter' )
	.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
   {
      id:1,
      title:'Item 1',
      detail:'Detail 1',
      image: 'www/img/thumbnail.png'
      },
        {
          id: 2,
      title:'Item 2',
      detail:'Detail 2',
      image: 'www/img/thumbnail.png'
      },
        {
          id:3,
      title:'Item 3',
      detail:'Detail 3',
      image: 'www/img/thumbnail.png'
      }
  ];

  return {
    all: function() {
      return items;
    },
    get: function(itemId) {
      // Simple index lookup
      return items[itemId];
    }
  }
})
	.controller( 'homeController', function ( $scope, Items ) 
	{
		$scope.items = Items.all();
    });
	


