// JavaScript Document

var setLogo = function() {
	$('.movable').each(function(index, element) {
		$(this).css('top',
			$('.default').offset().top -
			$(this).closest('.row').offset().top
		);
	});
};

$(document).scroll(function(){
	setLogo();
});

setLogo();