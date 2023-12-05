//criando uma função em javascript
function calcular(operacao){
    //criando uma variavel
    // A variavel nº1 está recebendo o valor digitado na cx de entrada
    //paserfloat()-converte o que esta dentro do parêntese em número decimal
    var numero1=parseFloat(document.getElementById("numero1").value);
    var numero2=parseFloat(document.getElementById("numero2").value);
    //variavel resultadoElemento receberá as informações que estiverem na TAG p
    var resultadoElemento=document.getElementById("resultado");
    //isNaN é uma função que verifica se a informação digitada é um texto (não é um número)
    if (isNaN(numero1)||isNaN(numero2)){
    resultadoElemento.textContent="por favor, insira números válidos.";
    return;
}
switch(operacao){
    case'soma':
         resultadoElemento.textContent= numero1+numero2;
         break;
    case 'subtracao':
        resultadoElemento.textContent=(numero1-numero2);
        break;
    case 'multiplicacao':
        resultadoElemento.textContent=(numero1*numero2);
        break;
    case 'divisao':
        if(numero2!=0){
          resultadoElemento.textContent=(numero1/numero2);
        }
        else{
            resultadoElemento.textContent="não é possivel dividir por zero.";
        }
        break;
    default:
        resultadoElemento.textContent="operacao desconhecida.";
        break;
    }
}