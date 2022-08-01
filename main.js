var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var botonCopiar = document.querySelector(".btnCopiar");
var botonPegar = document.querySelector(".btnPegar");
var resultado1 = document.querySelector(".resultado1");
var resultado2 = document.querySelector(".resultado2");
var mensEncriptado = document.querySelector(".textOutput");
var input = document.querySelector(".textInput");
var botonBorrar = document.querySelector(".btnBorrar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonBorrar.onclick = borrar;



botonCopiar.addEventListener('click', async () => {
    await navigator.clipboard.writeText(mensEncriptado.textContent)
})


botonPegar.addEventListener('click', async () => {
   const read = await navigator.clipboard.readText()
   input.value = read
})

function borrar(){
location.reload();
}

function encriptar(){
   ocultarElementos();
   mostarElementos(); 
   mensEncriptado.textContent = encriptarTexto(recuperarTexto()); 
}

function desencriptar(){
    ocultarElementos();
    mostarElementos(); 
    mensEncriptado.textContent = desencriptarTexto(recuperarTexto());
}



function recuperarTexto(){
     var area = document.querySelector(".textInput");
     return area.value;
}

function ocultarElementos(){
    resultado1.classList.add("ocultar");
}

function mostarElementos(){
    resultado2.classList.remove("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
       else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
} 

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
       else if (texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
} 