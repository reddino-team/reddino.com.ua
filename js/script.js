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
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

/*Скрипт для появления блока услуг*/
$( function() {
  // $('.services-title').removeClass('deactive');
  // $('.services-title').addClass('show__services-element');
  $(window).scroll(function () {
    var bo = $('body').scrollTop();
    // $('.services-title').text(bo
    if (bo) {
      var titleInWindow = inWindow('.services-title');
      titleInWindow.removeClass('deactive');
      titleInWindow.addClass('show__services-element');
      // $('.services-title').removeClass('deactive');
      // $('.services-title').addClass('show__services-element');
      var boxesInWindow = inWindow('.services__content-line');
      boxesInWindow.removeClass('deactive');
      boxesInWindow.addClass('show__services-element');
    } else if (bo > 2) {

    }
  });

});

// функция, которая по заданному селектору
// найдет соответствующие ему элементы, которые
// при этом попадают в видимую область окна
function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}
// сделаем фон этих элементов красным

/*Конец скрипта для появления блока услуг*/
function openFeedback() {
	document.getElementById('feedback').style.display = 'block';
}

function closeFeedback() {
	document.getElementById('feedback').style.display = 'none';
}

document.getElementById('feedback__button').addEventListener('click', openFeedback);
document.getElementById('close-window').addEventListener('click', closeFeedback);
