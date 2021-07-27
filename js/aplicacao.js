function enviar() { 

    var nome = document.getElementById("name");
    
    console.log(nome);

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}
