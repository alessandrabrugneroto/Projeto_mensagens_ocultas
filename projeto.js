

//caixa recebe a mensagem //
function cifrar() {
    let texto = document.getElementById("texto").value;
    let numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherCifrar(texto, numDesloc);
}
//caixa recebe a mensagem //

//selecionar encremento//
function cypherCifrar(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";
//
    //busca das letras//
    for (let i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (j = 0; j < textoArray.length; j++) {
        if (textoArray[j] >= 65 && textoArray[j] <= 90) {
            deslocamentoArray.push((((textoArray[j] - 65 + numDesloc) % 26) + 65));
        } else if (textoArray[j] >= 97 && textoArray[j] <= 122) {
            deslocamentoArray.push((((textoArray[j] - 97 + numDesloc) % 26) + 97));
        } else {
            deslocamentoArray.push(textoArray[j]);
        }
    }

    for (g = 0; g < deslocamentoArray.length; g++) {
        textoCodificado += String.fromCharCode(deslocamentoArray[g]);
        //busca das letras//
        
        //retorna a mensagem traduzida//
    }
    return textoCodificado;
}
//
//busca das letras//
function decifrar() {
    let texto = document.getElementById("texto").value;
    let numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherDec(texto, numDesloc);
}

function cypherDec(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";

    for (let i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (j = 0; j < textoArray.length; j++) {
        if (textoArray[j] >= 65 && textoArray[j] <= 90) {
            deslocamentoArray.push((((textoArray[j] - 90 - numDesloc) % 26) + 90));
        } else if (textoArray[j] >= 97 && textoArray[j] <= 122) {
            deslocamentoArray.push((((textoArray[j] - 122 - numDesloc) % 26) + 122));
        } else {
            deslocamentoArray.push(textoArray[j]);
        }
    }

    for (g = 0; g < deslocamentoArray.length; g++) {
        textoCodificado += String.fromCharCode(deslocamentoArray[g]);
        //retorna a mensagem traduzida//
    }
    return textoCodificado;
}
