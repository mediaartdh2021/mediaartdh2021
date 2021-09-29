var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


$(function(){
  var imgs = $("#slideshow > li");
  var imgLen = imgs.length;
  var count = 0;
  function changeImg(){
    count = (count + 1) % imgLen;
    imgs.removeClass("showSlide").eq(count).addClass("showSlide");
  }
  setInterval(changeImg, 5000);
})
