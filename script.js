class calcularIMC{
    constructor(altura, peso){
        this.peso = peso;
        this.altura = altura;
    }
//metodo calcular IMC
calcular(){
    return this.peso /(this.altura * this.altura);
}
//metodo para classificar o imc 
classificacao(){
    const imc =this.calcular();
    if(imc<18.5){
        return `IMC ${imc.toFixed(2)} - Abaixo do peso`;
    } else if(imc < 25){
        return `IMC ${imc.toFixed(2)} - Peso normal`;
    }else if (imc < 30){
        return `IMC ${imc.toFixed(2)} - Sobrepeso`;
    }else if (imc < 35){
         return `IMC ${imc.toFixed(2)} - Obesidade grau I`;
    }else if (imc < 40){
         return `IMC ${imc.toFixed(2)} - Obesidade grau II`;
    }else{
        return `IMC ${imc.toFixed(2)} - Obesidade grau III`;
    }

}
}
function CalcularIMC (){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoIMC = document.getElementById('resultado');

    //validaçao 
    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <=0){
        resultadoIMC.innerText = 'informe valores válidos!';
        return;
    }
//instancia a classe 
const pessoa = new calcularIMC(altura, peso);
resultadoIMC.innerText = pessoa.classificacao();
} 
