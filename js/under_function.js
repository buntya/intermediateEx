$(function(){
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
			$('.hamburger').addClass('hamburger__none')
			$('html').addClass('is-fixed');
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
			$('.hamburger').removeClass('hamburger__none')
			$('html').removeClass('is-fixed');
      return false;
  });
});

//AOS.js
AOS.init();


//ハンバーガーメニュー
$(function() {
	$('.hamburger').click(function() {
			$(this).toggleClass('active');

			if ($(this).hasClass('active')) {
					$('.globalMenuSp').addClass('active');
					$('html').addClass('is-fixed');
			} else {
					$('.globalMenuSp').removeClass('active');
					$('html').removeClass('is-fixed');
			}
	});
});