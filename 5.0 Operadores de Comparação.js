/*

Operadores de Comparação

== -> Igual // compara o valor,mas não o tipo
=== -> Totalmente igual // Compara o valor e o tipo

!= -> Diferente // Ele compara o valor, mas não o tipo
!== -> Totalmente diferente // Compara o valor e o tipo

*/

const firstNumber = 45
const SecondNumber = "45"

console.log(firstNumber!== SecondNumber)


if (firstNumber=== SecondNumber) {

    console.log("São iguais")

}

else  {
    console.log("São diferentes")

}