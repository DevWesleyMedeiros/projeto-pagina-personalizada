$(document).ready(()=>{

    $('#humburguer-menu').click(function(evt){
        setTimeout(() => {
            $(this).css('display', 'none')
        }, 110);
        $('.itens-menu-humburguer').slideDown(1000, function(evt){
            $(this).css('display', 'flex');
            $('#close-menu-humburguer').css('display', 'block');
        });
    })
    $('#close-menu-humburguer').click(function(evt){
        $('.itens-menu-humburguer').slideUp(1000, function(evt){
            $(this).css('display', 'none');
            $('#humburguer-menu').css('display', 'block');
        });
    })
})