

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
      $(this).find('.votes').text(result.count);
    }).on('ajax:error', function () {
      window.location = '/users/sign_in';
    });

    $(window).load(function(){
      setTimeout(function(){
        $(".alert").fadeOut();
    }, 1500)
  })
})
