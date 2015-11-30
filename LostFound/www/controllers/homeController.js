angular.module( 'starter' )
	.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
   {
      id:1,
      title:'Samsung Galaxy S6',
      detail:'Has a green flip cover, Lost in Burchard 118',
      image: 'www/img/s6.jpg'
      },
        {
          id: 2,
      title:'Water Bottle',
      detail:'Gray with a black strap',
      image: 'www/img/waterbottle.jpg'
      },
        {
          id:3,
      title:'Keys',
      detail:'Contains two gold keys, a gray tag, a blue tag that says "Too cool for traditional manufacturing," and a gray flash drive',
      image: 'www/img/keys.jpg'
      }
  ];

  return {
    all: function() {
      return items;
    },
    get: function(itemId) {
      // Simple index lookup
      return items[itemId];
    },
    push: function(item) {
      return items.push(item);
    }
  }
})
	.controller( 'homeController', function ( $scope, Items ) 
	{
		$scope.items = Items.all();
  });
	


