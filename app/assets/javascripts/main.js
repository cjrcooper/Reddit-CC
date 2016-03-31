

$(document).ready(function(){
    $(".img-show-btn").on("click", function(){
      var $toShow = $(this).parent().parent().find(".img-index-container");
      var $firstElDisplay = $(this).parent().parent().find(".img-index-container").eq(0).css("display");
      if ($firstElDisplay === "block") {
        $toShow.eq(0).fadeOut();
      } else {
        $toShow.eq(0).fadeIn();
      }
    })

    $('a.vote[data-remote]').on('ajax:success', function (e, result) {
      var $buttons = $(this).closest('.btn-group');
      $buttons.find('.upcount').text(result.upcount);
      $buttons.find('.downcount').text(result.downcount);
    }).on('ajax:error', function () {
      window.location = '/users/sign_in';
    });

    $(window).load(function(){
      x = $(".sign").children().html()
      y = "Sign out"

      if (x === y){
        $(".mm-title").html('My').append("<span class='small-reddit-logo'> Subreddits</span>").css({
          "font-size": "12pt",
          "color": "#000",
          "font-weight": "700"
        });
      }
      else {
        $(".mm-title").html('All').append("<span class='small-reddit-logo'> Subreddits</span>");
      }
    });




    $(".browser-menu-button").on("click", function(){
      setTimeout(function(){
        $('#mm-blocker').css({
            backgroundColor: 'rgba(3,2,1,0.6)'
          });
      })
      });




    $(window).load(function(){
      setTimeout(function(){
        $(".alert").fadeOut();
    }, 1500)
  })
})
