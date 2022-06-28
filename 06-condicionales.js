//CONDICIONAL 

const nota = prompt("Cual es la nota final?")

if(nota < 4){
    console.log("Desaprobo")
    alert("Desaprobo")
}else if(nota < 7){
   console.log("Aprobó")
   alert("Aprobó")
}else {
    console.log("Promociono")
    alert("Promociono")
}

//Ejercicio 2

const edad= prompt(¿Cuál es tu edad?)

if (edad<16){
    console.log("No puede entrar")
    alert("No puede entrar")
}else if (edad>=16||edad<18){
    console.log("Puede ingresar al club pero no puede pasar al bar")
    alert("Puede ingresar al club pero no puede pasar al bar")
}else{
    console.log("Puede ingresar al club y al bar")
    alert("Puede ingresar al club y al bar")
}