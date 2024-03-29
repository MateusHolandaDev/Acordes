// *****************************************************************************
// ****************************VALIDAÇÃO DO CPF********************************

//CPF - Validação 
function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
         alert("cpf ok");
    return true;
       
}
function validarCPF(el) {
    if (!_cpf(el.value)) {
        alert("CPF inválido!" + el.value);
        // apaga o valor
        el.value = "";
    }

}

// *********************************************************************
//CEP - Validação de Rua, Bairro, Cidade e Estado (através da API ViaCep)

const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo];
        }

    }
}

function consultaCEP() {
    let cepDigitado = document.getElementById("cep1");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);
        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(dados => console.log(apresentaDados(dados)))
            })
            .catch(x => console.log("CEP não encontrado!"))
    }
    
}
// ******************************************************************
// *******************VALIDAR CADASTRO PADRINHO *********************

function validarDados(){
    if(document.form.nome.value == "" || document.form.nome.value.length <3 ){
        alert("Preencha o campo Nome corretamente!");
        document.form.nome.focus();        
        return false
    }

    if(document.form.sobrenome.value == "" || document.form.sobrenome.value.length <3){
        alert("Preencha o campo Sobrenome corretamente!");
        document.form.sobrenome.focus();
        return false
    }

    
    if (document.form.inputEmail.value.length < 3) {
        alert("Preencha campo E-mail corretamente!");
        document.form.inputEmail.focus();
        return false;
    }
    if (document.form.senha.value.length < 3) {
        alert("Preencha campo Senha corretamente!");
        document.form.senha.focus();
        return false;
    }
    if (document.form.confirmasenha.value != document.form.senha.value) {
        alert("Digite a mesma senha");
        document.form.confirmasenha.focus();
        return false;
    }
    
    if (!document.querySelector('[name="gridCheck"]:checked')) {
        alert("Selecione ao menos uma opção!");
        document.form.gridCheck[0].focus();
        return false;
    }   
    alert("Cadastro realizado com sucesso, Parabéns!!! \n Embreve nossa equipe entrará em contato.")

}

