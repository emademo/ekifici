(function  (argument) {
	// body...
	var video = document.getElementById("video");
//window.url for firefox
//webkitURL for chrome
/*From the firefox developer website I know that firefox use objectURL = window.URL.createObjectURL(file); to get url of file type, 
but in chrome and other webkit browsers we have window.webkitURL.createObjectURL() for detecting url.
	vendroUrl=window.URL || window.webkitURL.createObjectURL()*/



	vendorUrl=window.URL || window.webkitURL;

	navigator.getMedia= navigator.getUserMedia ||
	                    navigator.webkitGetUserMedia||
	                    navigator.mozGetUserMedia ||
	                    navigator.msGetUserMedia;

	                    //capturing video


	                    navigator.getMedia({
                            video:true,
                            audio:true

	                    },function(stream){
                          
                          video.src=vendorUrl.createObjectURL(stream);
                          video.play();
	                    },function(error){

	                    });



})();
