$(document).ready(() => {
    $('#sites').mouseenter(function(evt) {
        $('.dropdown-menu-for-site').css('display', 'block');
    }).mouseleave(function(evt) {
        setTimeout(() => {
            if (!$('.dropdown-menu-for-site').is(':hover')) {
                $('.dropdown-menu-for-site').css('display', 'none');
            }
        }, 10);
    });
    $('#parceiros').mouseenter(function(evt) {
        $('.dropdown-menu-for-parceiros').css('display', 'block');
    }).mouseleave(function(evt) {
        setTimeout(() => {
            if (!$('.dropdown-menu-for-parceiros').is(':hover')) {
                $('.dropdown-menu-for-parceiros').css('display', 'none');
            }
        }, 10);
    });
    $('#torrent').mouseenter(function(evt){
        $('.dropdown-menu-for-torrents').css('display', 'block');
    }).mouseleave(function(){
        setTimeout(()=>{
            if (!$('.dropdown-menu-for-torrents').is(':hover')) {
                $('.dropdown-menu-for-torrents').css('display', 'none');
            }
        }, 10)
    })
    $('.dropdown-menu-for-site').mouseleave(function(evt) {
        $('.dropdown-menu-for-site').css('display', 'none');
    });
    $('.dropdown-menu-for-parceiros').mouseleave(function(evt) {
        $('.dropdown-menu-for-parceiros').css('display', 'none');
    });
    $('.dropdown-menu-for-torrents').mouseleave(function(evt) {
        $('.dropdown-menu-for-torrents').css('display', 'none');
    });
});

