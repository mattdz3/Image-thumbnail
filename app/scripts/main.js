"use strict";

var detailPic;

var newCaption = new PhotoCollection();

var getPhotos = new PhotoCollection();

getPhotos.fetch().done(function() {
	getPhotos.each(function(photos) {
		new ThumbnailView({model: photos});
	})
	detailPic = new DetailView({model: getPhotos.first() })
})

// $(function(){
//   $('.add-caption').click(function(){
//     var inputVal = $('.input-caption').val()
//     var addNewCaption = newCaption.add({name: inputVal})
 
//     addNewCaption.save()
 
//   })
// })

