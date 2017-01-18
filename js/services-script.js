/*Скрипт для появления блока услуг*/
'use script';
$(function() {
  $(window).scroll(function () {
    var $body = $(window).scrollTop()

    if ($body) {
      var $titleInWindow = inWindow('.services-title');
      $titleInWindow.removeClass('deactive').addClass('show__services-element');

      var $itemMarketingInWindow = inWindow('.marketing-item').removeClass('deactive')

      var $itemWebDesignInWindow = inWindow('.web-design-item').removeClass('deactive')

      var $itemECommerceInWindow = inWindow('.e-commerce-item').removeClass('deactive')

      var $itemWebDevelopmentInWindow = inWindow('.web-development-item').removeClass('deactive')

      var $itemFreeSupportInWindow = inWindow('.free-support-item').removeClass('deactive')

      var $itemAppDevelopmentInWindow = inWindow('.app-development-item').removeClass('deactive')
    }
  });

  // функция, которая по заданному селектору
  // найдет соответствующие ему элементы, которые
  // при этом попадают в видимую область окна
  function inWindow(s) {

    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var currentEls = $(s);
    var result = [];

    currentEls.each(function(){
      var el = $(this);
      var offset = el.offset();
      if (scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
        result.push(this);
    });
    return $(result);
  }
});
/*Конец скрипта для появления блока услуг*/
