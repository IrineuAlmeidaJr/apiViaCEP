'use strict';

function preecherCampos(e) {
    const rua = document.getElementById('rua')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    rua.value = e.logradouro
    cidade.value = e.localidade
    estado.value = e.uf
}

const buscarCEP = async() => {
    const numCEP = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${numCEP}/json/`

    const dados = await fetch(url)
    const endereco = await dados.json()

    preecherCampos(endereco)    
}

document.getElementById('cep').addEventListener('focusout', buscarCEP)