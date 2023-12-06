function buscarCep() {
    let cep = document.querySelector("#cep").value;

    if (cep.length !== 8) {
        alert("CEP Inválido!");
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
        .then(data => {
            console.log(data)
            mostrarDados(data);
        })

        .catch(errado => {
            console.log("Algo deu errado!");
        })
}

const limparDados = () => {
    const apagar = document.querySelector("#apagar");
    apagar.addEventListener("click", () =>{
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML = '';
    })
}

function mostrarDados(dados) {
    let resultado = document.querySelector("#resultado");
    if (dados.erro) {
        resultado.innerHTML = "Não foi possível localizar o endereço!";
    } else {
        resultado.innerHTML = `
    <p>Endereço: ${dados.logradouro}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade} - ${dados.uf}</p>
    `
    }
}