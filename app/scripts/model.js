"use strict";

var Photo = Backbone.Model.extend({

	idAttribute: "_id",


	defaults: {
		caption: "",
		url: ""
	},

	initialize: function() {
	    this.on('change', function(){
	      // the future is now
	    })
	},

})

var PhotoCollection = Backbone.Collection.extend({

	model: Photo,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'

})