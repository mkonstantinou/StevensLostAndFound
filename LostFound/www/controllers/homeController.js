angular.module( 'starter' )
	.factory('Items', function() {
  // Might use a resource here that returns a JSON array
  var autoid = 6;
  
  // Some fake testing data
  var foundItems = [
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
  
  var lostItems = [
   {
      id:4,
      title:'Arms',
      detail:'~2\'10"with a white watch and soft skin',
      image: 'www/img/arm.jpg'
      },
      {
          id: 5,
      title:'Belt',
      detail:'Tan leather with a silver buckle',
      image: 'www/img/belt.jpg'
      },
        {
          id:6,
      title:'Bag',
      detail:'Green Ralph Lauren bag with brown leather trim',
      image: 'www/img/bag.jpg'
      }
  ];

  return {
    all: function() {
      return foundItems;
    },
    lost: function() {
      return lostItems;
    },
    found: function() {
      return foundItems
    },
    get: function(itemId) {
      // Simple index lookup
      return foundItems[itemId];
    },
    newId: function() {
      return (++autoid);
    },
    push: function(item, type) {
      if (type == "lost")
        return lostItems.push(item);
       else
        return foundItems.push(item);
    }
  }
})
	.controller( 'homeController', function ( $scope, Items ) 
	{
		$scope.foundItems = Items.found();
    $scope.lostItems = Items.lost();
  });
	


