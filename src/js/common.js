$(function() {

  $('.form-search .form-control').on('focusin', function() {
    $(this).addClass('show');
    $(this).siblings('.fa-search').addClass('us-btn');
  })

  $('.form-search .form-control').on('focusout', function() {
    $(this).removeClass('show');
    $(this).siblings('.fa-search').removeClass('us-btn');
    $(this).val('');
  })

  $(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('#to-top').addClass('show');
		} else {
			$('#to-top').removeClass('show');
		}
	});
	
	$('#to-top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })

  $("a[rel='scrollToId']").click(function() {
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetDiv).offset().top
    }, 1000);
  });

})