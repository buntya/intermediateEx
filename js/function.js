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


//スティッキーヘッダ―
var header_top = 0;

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (header_top == top) {
    $('header').removeClass('after-scroll')
    var src = $('.header__logo--img').children('img').attr('src').replace('sub', 'top'); //現在のimgからsrcを取得し、一部を書き換える
    $('.header__logo--img').children('img').attr('src', src); //書き換えたsrcをimgタグに設定する
    } else {
    $('header').addClass('after-scroll')
    var src = $('.header__logo--img').children('img').attr('src').replace('top', 'sub'); 
    $('.header__logo--img').children('img').attr('src', src); 
  }
});

//スライダー
let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true, // ループの指定
  effect: "fade", //フェードの指定
  autoplay: {
      delay: 5000, //5秒後に次のスライドへ
      disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
  },
  speed: 1000 //２秒かけてフェードで切り替わる
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