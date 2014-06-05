"use strict";

var Photo = Backbone.Model.extend({

	idAttribute: "_id",

	initialize: function() {
	    this.on('change', function(){
	      // here is the future
	    })
	},

})

var PhotoCollection = Backbone.Collection.extend({

	model: Photo,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'

})