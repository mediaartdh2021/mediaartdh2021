var menuHeight = $(".popup_nav").height();
$(window).scroll(function(){
  if ($(window).scrollTop() >200){
    // $(".popup_nav").css("top", 0 + "px");
    // $(".popup_nav").css("bottom",  0 + "px");
  } else {
    // $(".popup_nav").css("top", "-" + menuHeight + 5 + "px");
    $(".popup_nav").css("bottom", menuHeight  + "px");
  }
});