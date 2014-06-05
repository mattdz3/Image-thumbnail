"use strict";

var ThumbnailView = Backbone.View.extend({

	className: 'thumbnail',
	
	template: _.template($('.thumbnail-image').text()),
	detailTemplate: _.template($('.detail-image').text()),

	events: {
		"click" : "showDetailView",
	},

	initialize: function() {

		this.listenTo(this.model, 'change', this.render);
		

		$('.container').prepend(this.el);
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

$(function(){
  $('.add-caption').click(function(){
    var inputVal = $('.input-caption').val()
    var addNewCaption = newCaption.add({name: inputVal})
 
    addNewCaption.save()
 
  })
})

var newCaption = new PhotoCollection