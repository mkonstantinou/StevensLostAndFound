angular.module( 'starter' )
	.controller('addItemController', function($scope, $ionicModal)
	{
<<<<<<< HEAD
	  $ionicModal.fromTemplateUrl('addItemform.html', 
=======
	  $ionicModal.fromTemplateUrl('www/templates/addItemform/addItemform.html',
>>>>>>> 38ac42f5aa594f0a37eafc1ae81a00417debb6af
	  {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal)
	  {
	    $scope.modal = modal;
	  });

	  $scope.openModal = function()
	  {
	    $scope.modal.show();
	  };

	  $scope.closeModal = function()
	  {
	    $scope.modal.hide();
	  };

	  //Cleanup the modal when we're done with it!
	  $scope.$on('$destroy', function()
	  {
	    $scope.modal.remove();
	  });

	});
