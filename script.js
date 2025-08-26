class calcularIMC{
    constructor(altura, peso){
        this.peso = peso;
        this.altura = altura;
    }
//metodo calcuklar IMC
calcular(){
    return this.peso /(this.altura * this.altura);
}
}
