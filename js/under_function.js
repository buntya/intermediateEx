$(function(){
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
			$('.hamburger').addClass('hamburger__none')
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
			$('.hamburger').removeClass('hamburger__none')
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
			} else {
					$('.globalMenuSp').removeClass('active');
			}
	});
});