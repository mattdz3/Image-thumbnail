.t"use strict";

var DetailView = Backbone.View.extend({

	className: "detail-pic",

	detailTemplate: _.template($('.detail-image').text()),

	events: {
		"click .add-photo"     : "editPhoto",
		"click .add-caption"   : "addCaption",
		"click .add-new-photo" : "addPhoto"
	},


	initialize: function() {

		this.listenTo(getPhotos, 'add', function(photo){
	    	new ThumbnailView({model: photo})
	    })

	    this.listenTo(this.model, 'change', this.render);

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
			caption: this.$el.find('.input-caption').val(),
		});

		getPhotos.add(this.model);

		this.model.save().done(function() {
			this.$el.find('.status').html('You added a new caption!')
		});
	},

	editPhoto: function() {

		this.model.set({
			url: this.$el.find('.input-photo').val(),
		});

		getPhotos.add(this.model);

		this.model.save().done(function() {
			this.$el.find('.status').html('You edited an image!')
		});
	},
})


