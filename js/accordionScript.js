$(document).ready(function() {
    $('.personsBtn').click(function(event) {
        if($('.content-block').hasClass('personsOne')) {
            $('.personsBtn').not($(this)).removeClass('active');
            $('.personsInfo').not($(this).next().next()).slideUp(500);
        }
        $(this).toggleClass('active').next().next().slideToggle(500);
    })
})