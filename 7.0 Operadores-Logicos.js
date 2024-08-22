/*

&& -> E -> Pessoa exigente,Pessoa obediente  (Caso apareça um false,todos serão)
    true && true = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto faz/ Filho espertinho (Caso apareça um true,todos serão)
    true && true = true
    true && false = true
    false && false = false

! -> Negação
    !true = false  (contraria a informaçao)
    !false = true

*/ 

console.log (!(true && true && true ) ) // contraria a informaçao


const Senha = true
const Itoken = false
const PalavraChave = false

if (Senha && Itoken &&  PalavraChave) {
    console.log("Logado com Sucesso")

}

else {
    console.log("Falha ao logar")

}