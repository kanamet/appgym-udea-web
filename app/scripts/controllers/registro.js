var registroApp = angular.module('registrarUsuario', ['ngResource', 'ui.bootstrap']);

registroApp.factory('CoffeeOrder', function ($resource) {
       return $resource('/service/coffeeshop/:id/order/',
                    {id: '@coffeeShopId'}, {}
	);
       
});

registroApp.controller('RegistroCtrl', function($scope, CoffeeOrder){
              
       $scope.sizes = ['Antiguo', 'Nuevo']
       
       $scope.messages = [];
       
       $scope.registrarUsuario = function(){
             CoffeeOrder.save({id: 1}, $scope.drink,
            		 function (order){
            	 		$scope.messages.push({type: 'success', msg: 'Order sent!', orderId: order.id})
             		 }
             )            
      }
       $scope.closeAlert = function (index) {
    	   $scope.messages.splice(index, 1);
       };
       
});
