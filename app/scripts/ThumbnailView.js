"use strict";

var ThumbnailView = Backbone.View.extend({

	className: 'thumbnail',
	
	template: _.template($('.thumbnail-image').text()),


	initialize: function() {

		this.listenTo(this.model, 'change', this.render);
		

		$('.container').append(this.el);
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},
})



