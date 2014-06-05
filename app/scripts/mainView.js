"use strict";

var DetailView = Backbone.View.extend({

	className: "detail-pic",

	template: _.template($('.thumbnail-image').text()),
	detailTemplate: _.template($('.detail-image').text()),

	events: {
		"click" : "goGetPhoto",
		"click .detail-image" : "showThumbnailView",
	},

	initialize: function() {
		$('.container').empty();
		$('.container').append(this.el);
		this.render();
	},

	render: function() {
		var renderTemp = this.detailTemplate(this.model.attributes)
		this.$el.html(renderTemp);
	},

	showThumbnailView: function() {
		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);

		new ThumbnailView({model: this.model})
	},

	goGetPhoto: function() {
		var getPhoto = new PhotoCollection();

		getPhoto.get('url').done(function() {
			new DetailView({model: this.model})
		})
	},

})

