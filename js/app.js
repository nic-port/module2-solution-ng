(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listToBuy = this;
  listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
  listToBuy.bought = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
	}
}
//LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var listBought = this;
  listBought.items = ShoppingListCheckOffService.getItemsBought();
}

//Use shopping list service
function ShoppingListCheckOffService() {
	var service = this;
	var buyList = [
	"5 Milk Jugs", 
	"2 Donuts", 
	"4 Cookies", 
	"5 Chocolates", 
	"3 Candies",
	];
	var itemBought = [];

	service.getItemsToBuy = function () {
    return buyList;
  };

  service.moveItem = function (itemIndex) {
    var item =  buyList[itemIndex];
		itemBought.push(item);
    buyList.splice(itemIndex, 1);
  };	

  service.getItemsBought = function () {
    return itemBought;
  };

}

})();