$(window).load(function(){
    $("body").css("overflow","auto");

    $(".looding .spinner").fadeOut(1500,
        function(){
        $(this).parent().fadeOut(1500,
        function(){
            $(this).remove();
        })
    });
});

$(document).ready(function() {
    $(".btn_top").click(function() {
        $("html,body").animate({scrollTop:0},1500);
    });

    // scroll
    $('a[href^="#"]').click(function() {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
    return false;
    e.preventDefault();
    });



    $(window).scroll(function(){
        if ($(this).scrollTop() > 750) {
            $('nav').addClass('nav_fixed');
            $('nav').removeClass('.nav');
        } else {
            $('nav').removeClass('nav_fixed');
            $('nav').addClass('.nav');
        }
    });



    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })



});
