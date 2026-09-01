import './style.css';
const Copo = require('./models/Copo')


let resposta = document.getElementById('resposta')
let btnCalcular = document.getElementById('btnCalcular')


btnCalcular.addEventListener('click', () =>{
    let raioMaior = parseFloat(document.getElementById('raioMaior').value)
    let raioMenor = parseFloat(document.getElementById('raioMenor').value)
    let altura = parseFloat(document.getElementById('altura').value)


    const copo = new Copo(raioMaior, raioMenor, altura)


    let classificacaoVolume = copo.classificarVolume()


    resposta.innerHTML = `A geratriz do copo é: ${copo.calcularGeratriz().toFixed(2)}<br>
    A área da base menor é: ${copo.calcularAreaBaseMenor().toFixed(2)}<br>
    A área da base maior é: ${copo.calcularAreaBaseMaior().toFixed(2)}<br>
    A área lateral é: ${copo.calcularAreaLateral().toFixed(2)}<br>
    O volume do copo é: ${copo.calcularVolume().toFixed(2)}<br>
    A área total do copo é: ${copo.calcularAreaTotal().toFixed(2)}<br>
    Classificação do volume: ${classificacaoVolume}`
})


let btnLimpar = document.getElementById('btnLimpar')
btnLimpar.addEventListener('click', () => {
    document.getElementById('raioMaior').value = ''
    document.getElementById('raioMenor').value = ''
    document.getElementById('altura').value = ''
    resposta.innerHTML = ''
})