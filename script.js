const dataNaTela = document.querySelector('.container h1')
const data = new Date()

dataNaTela.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full'})