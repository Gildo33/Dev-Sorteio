/*

IF (SE)
Else (Se não)
Else if

*/ 

const temperature=32
if (temperature==36) {
    console.log("Você irá treinar")
}

else if (temperature > 36 && temperature<=40) {
    console.log("Você estar com febre")

}
else if(temperature>40){
    console.log("estar com muita  febre")
}

else {
    console.log("você estar com hipotermia")
}

