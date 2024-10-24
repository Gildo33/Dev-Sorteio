/*
Operadores Ternário

? if(se)
: else (se não)
&& (if sem else)

*/ 

const salary = 12000
if(salary>3000 ) {
    console.log("Sou senior")
}
else {
    console.log("Sou junior")
}
 salary >=3000 ? console.log("Sou senior") : console.log("Sou junior") //if e else

 salary >=3000 && console.log("Sou senior") //somente  if

 salary < 3000 ? console.log("Sou junior") : salary >= 3000 && salary < 10000 ? ("Sou senior") : console.log("Diretor")
 //Else e if 