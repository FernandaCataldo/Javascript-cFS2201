//Crear una función llamada “saludar” que reciba dos parámetros, un nombre y un género:
//Si el género especificado es F que devuelva un alert que diga “Bienvenida [nombre] a nuestra página.”
//Si el género especificado es M que devuelva un alert que diga “Bienvenido [nombre] a nuestra página.”
//Si el género no es F o M que devuelva un alert que diga “Bienvenidx [nombre] a nuestra página.”


function saludar (nombre, genero){
if (genero==="F"){
    alert (`Bienvenida ${nombre} a nuestra página.`)
}else if (genero==="M"){
    alert (`Bienvenido ${nombre} a nuestra página.`)
}else {alert (`Bienvenidx ${nombre} a nuestra página.`)
}
}