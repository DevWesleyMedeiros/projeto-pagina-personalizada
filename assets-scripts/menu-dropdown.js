$(document).ready(() => {
    $(document).on('mouseenter', '#sites', function(evt) {
        $('.dropdown-menu-for-site').css('display', 'block');
    }).on('mouseleave', '#sites', function(evt) {
        setTimeout(() => {
            if (!$('.dropdown-menu-for-site').is(':hover')) {
                $('.dropdown-menu-for-site').css('display', 'none');
            }
        }, 10);
    });

    $(document).on('mouseenter', '#parceiros', function(evt) {
        $('.dropdown-menu-for-parceiros').css('display', 'block');
    }).on('mouseleave', '#parceiros', function(evt) {
        setTimeout(() => {
            if (!$('.dropdown-menu-for-parceiros').is(':hover')) {
                $('.dropdown-menu-for-parceiros').css('display', 'none');
            }
        }, 10);
    });

    $(document).on('mouseenter', '#torrent', function(evt) {
        $('.dropdown-menu-for-torrents').css('display', 'block');
    }).on('mouseleave', '#torrent', function() {
        setTimeout(() => {
            if (!$('.dropdown-menu-for-torrents').is(':hover')) {
                $('.dropdown-menu-for-torrents').css('display', 'none');
            }
        }, 10);
    });

    $(document).on('mouseleave', '.dropdown-menu-for-site', function(evt) {
        $('.dropdown-menu-for-site').css('display', 'none');
    });

    $(document).on('mouseleave', '.dropdown-menu-for-parceiros', function(evt) {
        $('.dropdown-menu-for-parceiros').css('display', 'none');
    });

    $(document).on('mouseleave', '.dropdown-menu-for-torrents', function(evt) {
        $('.dropdown-menu-for-torrents').css('display', 'none');
    });
});



