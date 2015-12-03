angular.module( 'starter' )
	.factory('Items', function() {
  // Might use a resource here that returns a JSON array
  var autoid = 6;
  
  // Some fake testing data
  var foundItems = [
   {
      id:1,
      title:'Samsung Galaxy S6',
      detail:'Has a green flip cover',
      location: 'Babbio First Floor',
      image: 'www/img/s6.jpg'
      },
        {
          id: 2,
      title:'Water Bottle',
      detail:'Gray with a black strap',
      location: 'Pierce Dining Hall',
      image: 'www/img/waterbottle.jpg'
      },
        {
          id:3,
      title:'Keys',
      detail:'Contains two gold keys, a gray tag, a blue tag that says "Too cool for traditional manufacturing," and a gray flash drive',
      location: 'Jacobus Large Conference Room',
      image: 'www/img/keys.jpg'
      }
  ];
  
  var lostItems = [
   {
      id:4,
      title:'Arms',
      detail:'~2\' long with a white watch and soft skin',
      location: 'Jacobus',
      image: 'www/img/arm.jpg'
      },
      {
          id: 5,
      title:'Belt',
      detail:'Tan leather with a silver buckle',
      location: 'Walker Gym Locker Room',
      image: 'www/img/belt.jpg'
      },
        {
          id:6,
      title:'Bag',
      detail:'Green Ralph Lauren bag with brown leather trim',
      location: 'America\'s Cup',
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
      var result = foundItems.filter(function (item) { return item.id === itemId });
      
      if (result.length == 0)
        result = lostItems.filter(function (item) { return item.id === itemId });
      
      return result[0];
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
	


