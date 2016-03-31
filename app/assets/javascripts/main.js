

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
      $(".mm-title").html('Subreddits');
    });

    $(window).load(function(){
      setTimeout(function(){
        $(".alert").fadeOut();
    }, 1500)
  })
})
