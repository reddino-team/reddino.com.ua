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


function openFeedback() {
	document.getElementById('feedback').style.display = 'block';
}

function closeFeedback() {
	document.getElementById('feedback').style.display = 'none';
}

document.getElementById('feedback__button').addEventListener('click', openFeedback);
document.getElementById('close-window').addEventListener('click', closeFeedback);





