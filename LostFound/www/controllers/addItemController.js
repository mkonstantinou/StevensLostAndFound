angular.module( 'starter' )
	.controller('addItemController', function($scope, $ionicModal)
	{
	  $ionicModal.fromTemplateUrl('www/templates/addItemform/addItemform.html',
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
