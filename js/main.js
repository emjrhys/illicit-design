$('nav span').mouseenter(function() {
	$('nav').removeClass('closed');
});

$('nav').mouseleave(function() {
	$('nav').addClass('closed');
})

$('nav a').click(function() {
	var page = $(this).parent().index();
	console.log(page);
	$('html,body').animate({
      	scrollTop: $('.section-container > section').eq(page).offset().top
    }, 500);
});

jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('.preloader').fadeOut('slow',function(){$(this).remove();});
	});

});