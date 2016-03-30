

$(document).ready(function(){
    $(".img-show-btn").on("click", function(){
      $(".img-index-container").toggle()
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
