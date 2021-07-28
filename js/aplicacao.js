// ALERTA ENVIO DO FORMULARIO (APENAS SIMULACAO)
function enviar() { 

    var nome = document.getElementById("name");
    
    console.log(nome);

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

// VALIDAÇÃO DE CPF
function ValidaCpfStyle(e) // ADICIONANDO UMA CLASSE DE ESTILO
{
    console.log(e);
    if (e.value && !validaCPF(e.value))
    {
        e.classList.add("invalid");
        e.classList.remove("valid");
    }
    else
    {
        e.classList.remove("invalid");
        e.classList.add("valid");
    }
}

function validaCPF(cpf) { //FUNCAO PARA VALIDAR O CPF //
    if (cpf.length != 11){ //VALIDA SE TEM OS 11 DIGITOS
    return false;
}
else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);
        var soma = 0;
        for (var i = 10; i > 1; i--) {
          soma += numeros.charAt(10 - i) * i;  
        }
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // VALIDACAO DO PRIMEIRO DIGITO
        if (resultado != digitos.charAt(0)) {
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // VALIDACAO DO SEGUNDO DIGITO
        if (resultado != digitos.charAt(1)) {
            return false;
        }
    return true;
}
}

function validacao() {
console.log('Iniciando validação CPF');
var cpf = document.getElementById("cpf_digitado").value;
var resultadoValidacao = validaCPF(cpf);
}
// FIM VALIDACAO DE CPF

//PESQUISA ENDERECO PELO CEP

function limpa_formulário_cep() {
    //LIMPA VALORES DO FORMULÁRIO DE CEP
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //ATUALIZA OS CAMPOS COM OS VALORES.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //FIM DO IF.
else {
    //CEP NÃO ENCONTRADO
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//NOVA VARIÁVEL "CEP" SOMENTE COM DÍGITOS.
var cep = valor.replace(/\D/g, '');

//VERIFICA SE CAMPO CEP POSSUI VALOR INFORMADO.
if (cep != "") {

    //EXPRESSÃO REGULAR PARA VALIDAR O CEP.
    var validacep = /^[0-9]{8}$/;

    //VALIDA O FORMATO DO CEP
    if(validacep.test(cep)) {

        //PREENCHE OS CAMPOS COM "..." ENQUANTO CONSULTA WEBSERVICE
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //CRIA UM ELEMENTO JAVASCRIPT
        var script = document.createElement('script');

        //SINCRONIZA COM O CALLBACK
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //INSERE SCRIPT NO DOCUMENTO E CARREGA O CONTEÚDO
        document.body.appendChild(script);

    } //FIM IF
    else {
        //CEP É INVÁLIDO
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //FIM IF
else {
    //CEP SEM VALOR, LIMPA FORMULÁRIO
    limpa_formulário_cep();
}
};

//FIM PESQUISA ENDERECO PELO CEP

//MASCARA TELEFONES

function telefone(e){
    e.value=e.value.replace(/\D/g,"")                 //REMOVE TUDO O QUE NÃO É DÍGITO
    e.value=e.value.replace(/^(\d\d)(\d)/g,"($1) $2") //COLOCA PARÊNTESES EM VOLTA DOS DOIS PRIMEIROS DÍGITOS
    e.value=e.value.replace(/(\d{4})(\d)/,"$1-$2")    //COLOCA HÍFEN ENTRE O QUARTO E O QUINTO DÍGITOS
    return e
}

function celular(e){
    e.value=e.value.replace(/\D/g,"")                 //REMOVE TUDO O QUE NÃO É DÍGITO
    e.value=e.value.replace(/^(\d\d)(\d)/g,"($1) $2") //COLOCA PARÊNTESES EM VOLTA DOS DOIS PRIMEIROS DÍGITOS
    e.value=e.value.replace(/(\d{5})(\d)/,"$1-$2")    //COLOCA HÍFEN ENTRE O QUINTO E O SEXTO DÍGITOS
    return e
}