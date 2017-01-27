(function($) {
    $(function() {
        $('.jcarousel').on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();
            width = 300;
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
        	animation: 'slow',
            wrap: 'circular'
        });

        $('.jcarousel-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-next').jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel').jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    });
})(jQuery);


(function($) {
    $(function() {
        $('ul.services__tabs-caption').on('click', 'li:not(.services__tabs-active)', function() {
            $(this)
                .addClass('services__tabs-active').siblings().removeClass('services__tabs-active')
                .closest('div.services-tabs').find('div.services__tabs-content').removeClass('services__tabs-active').eq($(this).index()).addClass('services__tabs-active');
        });
    });
})(jQuery);


$(document).ready(function(){
    $(".top-header__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        if (event.currentTarget.innerHTML != 'Блог') {
          event.preventDefault();
          //забираем идентификатор бока с атрибута href
          var id  = $(this).attr('href'),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
          //меняем цвет ссылки в меню
          $(this).addClass('menu__item-active').siblings().removeClass('menu__item-active');
       }
    });

   $(window).scroll(function(){
      $topHeaderHeight = $('.top-header').height();
      //для каждого блока с классом "anchor" выполняем следующее
      $('.anchor').each(function() {
          var $scrollTop = $(window).scrollTop(); //определяем величину прокрутки
          var $anchorOffsetTop = $(this).offset().top; //определяем отступ блока с классом "anchor" от верха страницы
          var $anchorId = $(this).attr('id'); // получаем id блока с классом "anchor", до которого выполнилась прокрутка

          if ($scrollTop > $anchorOffsetTop-$topHeaderHeight) {
              $('.top-header__menu').find('a').removeClass('menu__item-active');
              $('.top-header__menu').find('a[href="#' + $anchorId + '"]').addClass('menu__item-active');
          };
      });
   });

   //-------MENU SECONDARY-NAV----------------------------------------------------->
   //on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
   var secondaryNav = $('.cd-secondary-nav'),
   	   secondaryNavTopPosition = secondaryNav.offset().top;

       $(window).on('scroll', function(){
     	      if($(window).scrollTop() > secondaryNavTopPosition ) {
     		       secondaryNav.addClass('is-fixed');
     		    setTimeout(function() {
               secondaryNav.addClass('animate-children');
               $('#cd-logo').addClass('slide-in');
         			 $('.cd-btn').addClass('slide-in');
               }, 50);
     	      } else {
           		secondaryNav.removeClass('is-fixed');
           		setTimeout(function() {
              secondaryNav.removeClass('animate-children');
              $('#cd-logo').removeClass('slide-in');
     			    $('.cd-btn').removeClass('slide-in');
              }, 50);
     	      }
        });

     $('.cd-secondary-nav-trigger').on('click', function(event){
       		event.preventDefault();
       		$(this).toggleClass('menu-is-open');
     		  secondaryNav.find('ul').toggleClass('is-visible');
     	});

   // 	//smooth scrolling when clicking on the secondary navigation items
    //       var target= $(this.hash);
   // 	      secondaryNav.find('ul a').on('click', function(event){
    //       event.preventDefault();
    //          $('body,html').animate({
    //          'scrollTop': target.offset().top - secondaryNav.height() + 1
    //        	 }, 400
    //        );
    //        //on mobile - close secondary navigation
    //        $('.cd-secondary-nav-trigger').removeClass('menu-is-open');
    //        secondaryNav.find('ul').removeClass('is-visible');
    //    });
   });
