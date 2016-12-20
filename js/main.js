$('.phone').click( function() {
   $('.list').hide();
   $('.phone-list').show();
    $('.message').css("background-color","#12b7f5").css("color","#fff");
});
$('.message').click( function() {
   $('.list').show();
   $('.phone-list').hide();
    $('.message').css("background-color","#fff").css("color","#12b7f5");
});

$('.hd-right-icon').click( function () {
    $('.hd-rightbox').slideToggle();
});