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

if (edad>18){
    
    alert("Puede ingresar al club y al bar")
}else if (eda>=16){
   
    alert("Puede ingresar al club pero no puede pasar al bar")
}else{
    
    alert("No puede entrar")
}