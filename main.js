$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    });

    $('form').on('submit',function(e){
        e.preventDefault();
    
        const enderecoDaNovaImagem = $('#endereco-imagem').val();
        const novoIntem = $('<li style = "display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoIntem);
    
        $(`
        <div class="overlay-imagem">
            <a href = "${enderecoDaNovaImagem}" target="_blank" title = "Ver aImagem em tamanho real"> Ver imagem no tamanho real </a>
        </div>
           `).appendTo(novoIntem);

        $(novoIntem).appendTo('ul');
        $(novoIntem).fadeIn(1000);
        $('#endereco-imagem').val('')
    
        });

});


