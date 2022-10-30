const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso= document.querySelector('#peso')

const calcIMC = () =>{   //pega a função chamada no button
    if(altura.value !== ''  && peso.value !== ''){ //verifica se os campos forem vazios
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2) // se for vazio, fará o calculo do IMC, com no máximo 2 casas decimais
        let classification= ''

        if(imc < 18.5){
            classification = 'Você está abaixo do peso'
        }else if (imc < 25){
            classification = 'Seu peso está normal'
        }else if (imc < 30){
            classification = 'Você está acima do peso'
        }else if (imc < 35){
            classification = 'Você está em Obesidade Grau I'
        }else if (imc < 41){
            classification = 'Você está em Obesidade Grau II'
        }else{
            classification = 'Você está em Obesidade Grau III'
        }
        
        resultado.innerHTML = `IMC: ${imc} (${classification})`
    }else{
        resultado.innerHTML = 'Preencha os campos'
    }
}