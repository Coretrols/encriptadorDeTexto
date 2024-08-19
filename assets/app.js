

function hidenElement(){
    // Obtener el valor actualizado del textarea
    var textDesencriptadoValue = document.getElementById('textDesencriptado').value.trim();    
    // Verificar si el textarea no está vacío
    if(textDesencriptadoValue!==''){        
        // Ocultar el elemento de imagen
        //document.getElementById("imgCharmander").style.display = "none";
        //Ocultar la validación inicial
        document.getElementById('hValidacion').style.display = "none";
        document.getElementById('textEncriptado').style.display = "flex";
        document.getElementById('btnCopiar').style.display='flex';
        encriptarElement(textDesencriptadoValue);
    }
}

function watchElement(){
    document.getElementById("imgCharmander").style.display = "flex";
    if(document.getElementById('hValidacion').style.display == "none"){
        document.getElementById('hValidacion').style.display = "block"
    }
    //Verifica que exista información del texto desencriptado
    if(document.getElementById('textEncriptado').style.display !== "none"){
        //Asigna este valor a una variable
        var textDesencriptado = document.getElementById('textEncriptado').value; 
        //Habilitando el boton de copiar
        document.getElementById('btnCopiar').style.display = "flex";
        //Ejecuta la funcion la cual recibe el atributo anteriormente definido
        desencriptarElement(textDesencriptado);
    }
    ;
}
function encriptarElement(textDesencriptadoValue){    

    //Definiendo las variables
    let textEncriptadoSplit = textDesencriptadoValue.split('');
    let txtEncriptado = '';
    //validando el valor por medio de la consola
    // console.log(textEncriptadoSplit);
    // //Verificando el tamaño del arreglo
    // console.log(textEncriptadoSplit.length);
    //Habilitando el textArea de encriptado
    document.getElementById('textEncriptado').style.display = "flex";
    // console.log(textDesencriptadoValue);
    //Formateando el contenido del texto desencriptado
    document.getElementById('textDesencriptado').value = '';

    //Declarando el valor de la constante
    const btn = document.getElementById('imgCharmander');
    //Animando al poquemon
    btn.classList.add('animacion__boton');

    //Operando por medio de un ciclo For

    for (let i = 0; i < textEncriptadoSplit.length; i++) {
        if (textEncriptadoSplit[i] === 'a') {
            textEncriptadoSplit[i] = 'ai';
            txtEncriptado += textEncriptadoSplit[i];
        }else if (textEncriptadoSplit[i] === 'e') {
            textEncriptadoSplit[i] = 'enter';
            txtEncriptado += textEncriptadoSplit[i];
        }else if (textEncriptadoSplit[i] === 'i') {
           textEncriptadoSplit[i] = 'imes';
           txtEncriptado += textEncriptadoSplit[i];
        }else if (textEncriptadoSplit[i] === 'o') {
            textEncriptadoSplit[i] = 'ober';
            txtEncriptado += textEncriptadoSplit[i];
        }else if (textEncriptadoSplit[i] === 'u') {
            textEncriptadoSplit[i] = 'ufat';
            txtEncriptado += textEncriptadoSplit[i];
        } 
        else {
            txtEncriptado += textEncriptadoSplit[i];
        }
    }
    //Verificando el valor del vector encriptado
    console.log('Enc '+textEncriptadoSplit);
    //Asignando el valor del texto encriptado al campo textEncriptado
    document.getElementById('textEncriptado').value = txtEncriptado;

    return textEncriptadoSplit;
    

}
function construirVector(){

}
function desencriptarElement(textEncriptadoSplit) {
    // Verificando el valor de textEncriptadoSplit
    console.log('Texto encriptado recibido:', textEncriptadoSplit);

    // Ocultando el campo textArea
    document.getElementById('textEncriptado').style.display = 'none';
    
    // Ocultando el botón copiar
    document.getElementById('btnCopiar').style.display = 'none';    

    // Declarando los reemplazos
    const reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Realizando reemplazos
    let txtDesencriptado = textEncriptadoSplit;
    
    // Iterar sobre cada secuencia de reemplazo
    for (const [buscar, reemplazo] of Object.entries(reemplazos)) {
        const patron = new RegExp(buscar, 'g'); // Crear expresión regular para cada secuencia
        txtDesencriptado = txtDesencriptado.replace(patron, reemplazo); // Reemplazar la secuencia en el texto
    }
    document.getElementById('textDesencriptado').value = txtDesencriptado;
    // Verificando el resultado del desencriptado
    console.log('Texto desencriptado:', txtDesencriptado);
    
    


}

function copiarTexto(){
    // Obtén el elemento que contiene el texto que quieres copiar
    const textArea = document.getElementById('textEncriptado').value;    

    navigator.clipboard.writeText(textArea);
    
    console.log(textArea);
}