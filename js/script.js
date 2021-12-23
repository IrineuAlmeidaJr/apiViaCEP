'use strict';





const buscarCEP = async() => {
    const numCEP = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${numCEP}/json/`

    const dados = await fetch(url)
    const endereco = await dados.json()

    
    console.log(endereco)
    
}

document.getElementById('cep')
        .addEventListener('focusout', buscarCEP)