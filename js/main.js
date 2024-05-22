$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(  )     -    '
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder:'   .   .   -  '
    })

    $('#cep').mask('00000-000', {
        placeholder:'     -   '
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})