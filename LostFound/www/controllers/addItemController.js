angular.module( 'starter' )
	.controller('addItemController', function($scope, $ionicModal, Items )
	{
		$scope.hideFab = false;
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
			$scope.hideFab = true;
		};

		$scope.closeModal = function()
		{
			$scope.modal.hide();
			$scope.hideFab = false;
		};

		$scope.$on('$destroy', function()
		{
			$scope.modal.remove();
			$scope.hideFab = false;
		});
		$scope.submit = function(form)
		{
			if (!validate(form))
				return;
			
			var item = {
				id:1,
				title:form["title"].$modelValue ,
				detail:form["description"].$modelValue,
				image: 'www/img/thumbnail.png'
			};
			$scope.closeModal();
			Items.push(item);
			form.reset();
		};

		function validate(form)
		{
			if (form == null)
				return false;
			if (!form["title"].$modelValue)
				return false;
			if (!form["description"].$modelValue)
				return false;
			if (!form["date"].$modelValue)
				return false;
			
			return true;
		};
		//Cleanup the modal when we're done with it!
	});
