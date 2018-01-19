$(function(){
    $('.navbar').affix({
      offset: {
        /* Affix the navbar after scroll below header */
        top: $("header").outerHeight(true)}
    });
});

$(document).ready(function () {
      
    $("#order").click(function(){
         $('#myModal').modal('show');
    });
});



$(function() {
  
  // contact form animations
  $('#register').click(function() {
    $('#registerForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#registerForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
});


$(function() {
    $('#login').click(function() {
    $('#loginForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#loginForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
});
  

