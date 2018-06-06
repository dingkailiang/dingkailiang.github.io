/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------
 ====================================*/



'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});


(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#40424a",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#40424a",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress3").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress4").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress5").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress6").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
}

})(jQuery);
