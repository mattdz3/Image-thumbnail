"use strict";

var ThumbnailView = Backbone.View.extend({

	className: 'thumbnail',
	
	template: _.template($('.thumbnail-image').text()),
	detailTemplate: _.template($('.detail-image').text()),

	events: {
		"click" : "showDetailView",
	},

	initialize: function() {
		
		$('.container').append(this.el);
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
	},

	showDetailView: function() {
		var renderTemp = this.detailTemplate(this.model.attributes)
		this.$el.html(renderTemp);

		new DetailView({model: this.model})
	},






})

var getPhotos = new PhotoCollection();

getPhotos.fetch().done(function() {
	getPhotos.each(function(photos) {
		new ThumbnailView({model: photos});
	})
})