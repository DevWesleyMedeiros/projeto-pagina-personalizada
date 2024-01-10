$(document).ready(()=>{

    $('#humburguer-menu').click(function(evt){
        $(this).css('display', 'none');
        $('.itens-menu-humburguer').slideDown(1000, function(evt){
            $(this).css('display', 'flex');
            $('#close-menu-humburguer').css('display', 'block');
        });
    })
    $('#close-menu-humburguer').click(function(evt){
        $('#humburguer-menu').css('display', 'block');
        $('.itens-menu-humburguer').slideUp(1000, function(evt){
            $(this).css('display', 'none');
        });
    })
})