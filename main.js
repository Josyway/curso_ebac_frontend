$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const descricaoTarefa = $('#tarefas').val();
        const novaTarefa = $('<li></li>');
        $(`<p>${descricaoTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('li').click(function(){
            $(this).wrap("<strike>");
        });
        $('#tarefas').val('');
    })
})

