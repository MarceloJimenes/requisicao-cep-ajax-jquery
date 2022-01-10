async function cepConsult()
{
    $(".progress-bar").show();
    var cep = $('#cep').val();
    var consultUrl = `https://viacep.com.br/ws/${cep}/json/`;
    await $.ajax({
        url: consultUrl,
        type: "GET",
        success: function(response){
            $('#titulo').html(`CEP: ${response.cep}`)
            $('#log').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
            $('.progress').hide();
            $('.bem-vindo').hide();
            $('.cep').show();
        },
    })
}

$(function(){
    $(".cep").hide();
    $(".progress").hide();
})