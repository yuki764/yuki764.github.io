$(function() {
	var resizeTimer = null;
	$(window).on('resize', function() {
		adjustVideoPlayerToWindow();
		/*
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			adjustVideoPlayerToWindow();
		}, 200);
		*/
	});
});

function adjustVideoPlayerToWindow() {
	var newWidth = $(window).width() - 20;
	var newHeight = newWidth * 9 / 16;
	if(newHeight > 540) { newHeight = 540;}
	$(streamingVideoPlayer).width(newWidth);
	$(streamingVideoPlayer).height(newHeight);
}
