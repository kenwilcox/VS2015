(function () {
	var app = angular.module('store', []);
	app.controller('StoreController', function () {
		this.data = person;
	});

	app.config("", function() {
	};

	var person = {
		name: 'John Doe',
		wage: 10,
	};
})();