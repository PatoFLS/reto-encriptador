/* La letra "e" es convertida para "enter"
La letra "o" es convertida para "ober"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat" */ 
//orden para evitar superposicion
function omit_special_char(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // El gm es para que afecte linea y parrafo
    var txtencript = texto.replace(/e/g,"enter");
    var txtencript = txtencript.replace(/o/g,"ober");
    var txtencript = txtencript.replace(/i/g,"imes");
    var txtencript = txtencript.replace(/a/g,"ai");
    var txtencript = txtencript.replace(/u/g,"ufat");

    document.getElementById("imgmunieco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtencript;
    document.getElementById("copy").style.display = "show"
    document.getElementById("copy").style.display = "inherit"

    }

function  desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // El gm es para que afecte linea y parrafo
    var txtencript = texto.toString().replace(/enter/g,"e");
    var txtencript = txtencript.toString().replace(/ober/g,"o");
    var txtencript = txtencript.toString().replace(/imes/g,"i");
    var txtencript = txtencript.toString().replace(/ai/g,"a");
    var txtencript = txtencript.toString().replace(/ufat/g,"u");

    document.getElementById("imgmunieco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtencript;
    document.getElementById("copy").style.display = "show"
    document.getElementById("copy").style.display = "inherit"

    }

    function copiar()
    {
        let copyToClipboardButton = document.getElementById('copy');

        copyToClipboardButton.addEventListener('click', () => {
            let textToCopy = document.getElementById('texto2').value.toLowerCase();
            if(navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                   
            })
            } else {
            console.log('Browser Not compatible')
                }

            })
        
    }
    



