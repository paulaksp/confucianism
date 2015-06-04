$(window).resize(function () {
	windowDependent();
});

$(window).load(function () {
	windowDependent();
});

$(document).ready(function () {

	$(".glyphicon").click(function (e) {
 		var picHeight = $("div.picture").height();
		var navHeight = $(".navbar").height();
 		$("html,body").animate({
 			scrollTop: picHeight - navHeight
 		}, 1000, 'easeInOutCubic');
 	});

	// set up smooth scrolling
 	$('.navbar a, #page-footer a, #about-involved').on('click', function (e) {
		var divID = $(this).attr('href');
		$(divID).scrollView();
  });
});

var windowDependent = function () {
	var pictureDiv = $("div.picture");
	var pictureImg = $("img.picture");
	var windowHeight = $(window).height();

	if ($(window).width() < 300) {
		// fancy responsive stuff
	}

	// resize
	if(pictureImg.height() < windowHeight)
		pictureDiv.height(pictureImg.height() - 50);
	else pictureDiv.height(windowHeight);

	var toCenter = $(".text");

	if(pictureDiv.width() < 650)
		toCenter.width(pictureDiv.width()/2);
	else
		toCenter.width(500);

	// center & move
	var left = (pictureDiv.width() - toCenter.width())/2;
	var top = (pictureDiv.height() - (toCenter.height())+ $(".navbar").height())/2;
	toCenter.css("left", left + "px");
	toCenter.css("top", top + "px");
	$(".wrapper").css("top", (pictureDiv.height() - 50) + "px");
}

$(window).scroll(function () {
	var changeHeight = $("div.picture").height() - $(".navbar").height();
	if ( $(window).scrollTop() < changeHeight)
		$(".navbar").css("border-bottom-width", 0);
	else
		$(".navbar").css("border-bottom-width", "1px");
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$.fn.scrollView = function () {
  return this.each(function () {
		$('html, body').animate({
	    scrollTop: $(this).offset().top - $(".navbar").height()
		}, 1000);
  });
};


