"use strict";

var getPhotos = new PhotoCollection();

var Router = Backbone.Router.extend({

	routes: {
		""              : "routerHome",
		"photos/:id"    : "routerPhotos"
	},

	initialize: function () {

		getPhotos.fetch().done(function() {
			getPhotos.each(function(photos) {
				new ThumbnailView({model: photos});
			})

			detailPic = new DetailView({ model: getPhotos.first() })
		});

		console.log('WHEEE');
	},

	routerHome: function () {

		detailPic = new DetailView({ model: getPhotos.get() })

	},

	routerPhotos: function () {


	},

})

