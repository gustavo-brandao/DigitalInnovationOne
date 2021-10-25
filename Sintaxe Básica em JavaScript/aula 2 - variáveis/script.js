//tipos primitivos


//boolean
var vOuF = false;

console.log(vOuF);
console.log(typeof(vOuF));


//number
var numeroQualquer = 1;

console.log(numeroQualquer);
console.log(typeof(numeroQualquer));


//string
var nome = 'Gustavo';

console.log(nome);
console.log(typeof(nome));

//variáveis locais e globais
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();
