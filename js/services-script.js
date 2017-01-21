/*Скрипт для появления блока услуг*/
'use script';
$(function() {
  //СКРИПТ ДЛЯ НОВОГО БЛОКА УСЛУГ
$(function () {
  
var fooReveal = {
  origin: 'bottom',
  delay    : 500,
  distance : '200px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooReveal1 = {
  origin: 'bottom',
  delay    : 600,
  distance : '200px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooRev = {
  origin: 'bottom',
  delay    : 750,
  distance : '200px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooRev1 = {
  origin: 'bottom',
  delay    : 850,
  distance : '200px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooRev3 = {
  origin: 'bottom',
  delay    : 900,
  distance : '200px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooRev31 = {
  origin: 'bottom',
  delay    : 1000,
  distance : '200px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
window.sr = ScrollReveal();
sr.reveal('.foo', fooReveal);
sr.reveal('.foo_1', fooReveal1);
sr.reveal('.foo_2', fooRev);
sr.reveal('.foo_3', fooRev1);
sr.reveal('.foo_4', fooRev3);
sr.reveal('.foo_5', fooRev31);
})

//КОНЕЦ НОВОГО БЛОКА УСЛУГ
});
/*Конец скрипта для появления блока услуг*/
