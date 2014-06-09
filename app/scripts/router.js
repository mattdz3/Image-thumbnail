"use strict";

var Router = Backbone.Router.extend({

	routes: {
		""              : "routerHome",
		"photos/:id"    : "routerphotos"
	},

	initialize: function () {

		$('.detail-container').find('img').attr('src', 'http://fa-g.org/images/placeholder.png')

		console.log('WHEEE');
	},

	routerHome: function () {

		$('.detail-container').html("hello")

	},

	routerPhotos: function () {

		$('.detail-container').html("HOLA")

	},

})

