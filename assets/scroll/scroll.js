jQuery(function(jQuery){
  jQuery(".pagetop").hide();
      jQuery('body').append(
          jQuery('<div class=".pagetop">')
          .append(
              jQuery('<a href="#page"> </a>')
              .click(function(){jQuery('html,body').animate({ scrollTop:0}, 'fast'); return false})
              )
          );
      jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > 200) {
              jQuery('.pagetop').fadeIn();
          } else {
              jQuery('.pagetop').fadeOut();
          }
      });
  });
  
    jQuery(function(){
  var headerHight = 80; //ヘッダーの高さをpx指定
      //*ページ内リンクの指定
      jQuery('a[href^=#]').click(function(){
          var href= jQuery(this).attr("href");
          var target = jQuery(href == "#" || href == "" ? 'body' : href);
          var position = target.offset().top-headerHight;
          jQuery("html, body").animate({scrollTop:position}, 550, "swing");
          return false;
      });
      //*ページ外リンクの指定*/      
      var url = jQuery(location).attr('href');
      if (url.indexOf("?id=") == -1) {
          // ほかの処理
      }else{
          var url_sp = url.split("?id=");
          var hash     = '#' + url_sp[url_sp.length - 1];
          var target2 = jQuery(hash);
          var position2   = target2.offset().top-headerHight;
          jQuery("html, body").animate({scrollTop:position2}, 550, "swing");
      }
  });