$('.section-container').onepage_scroll({
	loop: false,
	animationTime: 500,
	pagination: false,
	updateURL: false,
	beforeMove: function(index) {
		$('nav').addClass('closed');
	},
	afterMove: function(index) {
		$('nav li').removeClass('hidden');
		$('nav li').eq(index-1).addClass('hidden');
	}
});

$('nav a').click(function() {
	var page = $(this).parent().index() + 1;
	$('.section-container').moveTo(page);
});

$('nav span').mouseenter(function() {
	$('nav').removeClass('closed');
});

$('nav').mouseleave(function() {
	$('nav').addClass('closed');
})