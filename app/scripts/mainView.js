"use strict";

var DetailView = Backbone.View.extend({

	className: "detail-pic",

	detailTemplate: _.template($('.detail-image').text()),

	events: {
		"click .add-photo"     : "editPhoto",
		"click .add-caption"   : "addCaption",
		"click .add-new-photo" : "addPhoto",
	},

	initialize: function() {

		this.listenTo(this.model, 'change', this.render)
		this.listenTo(this.model, 'add', this.render)

		$('.detail-container').prepend(this.el);
		this.render();
	},

	render: function() {
		var renderTemp = this.detailTemplate(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	addCaption: function() {

		this.model.set({
			caption: $('.input-caption').val(),
		});

		getPhotos.add(this.model).save();
	},

	editPhoto: function() {

		this.model.set({
			url: $('.input-photo').val(),
		});

		getPhotos.add(this.model);

		this.model.save();
	},

	addPhoto: function() {
		var addPhoto = new PhotoCollection();

		addPhoto.add({
			url: $('.input-new-photo').val(),
		}).save();
	},
})


