// ver libreria de JQuery isotope
// $('.portfolio-item').isotope({
//  	itemSelector: '.item',
//  	layoutMode: 'fitRows'
//  });
$('.productos-menu ul li').click(function() {
    $('.productos-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});
$(document).ready(function() {
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(document).ready(function() {
    var popup_btn = $('.popup-btn-kerala');
    popup_btn.magnificPopup({
        type: 'image',
        class: 'kerala',
        gallery: {
            enabled: true
        }
    });
});