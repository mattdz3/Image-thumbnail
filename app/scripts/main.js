"use strict";

var myRouter = new Router();

Backbone.history.start();

var addNewPhoto;

var detailPic;

var getPhotos = new PhotoCollection();

getPhotos.fetch().done(function() {
	getPhotos.each(function(photos) {
		new ThumbnailView({model: photos});
	})
	detailPic = new DetailView({ model: getPhotos.first() })
});


