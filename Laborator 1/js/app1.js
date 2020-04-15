console.log("Rezultate:");
vector = [];
vector2 = [];

function checkInput(ob) {
    var invalidChars = /[^0-9-,-.]/gi
    if(invalidChars.test(ob.value)) {
        ob.value = ob.value.replace(invalidChars,"");
    }
}

function randoms() {
    var randoms = [...Array(7)].map(() => Math.floor(Math.random() * 10000)+1);
    document.getElementById("myInput").value = randoms;
    /*for (i = 0; i < randoms.length; i++) {
        vector[i] = randoms[i];
    }console.log(vector);*/
} 

function getInputValue() {
    input = document.getElementById("myInput").value.split(',');
    for (i = 0; i < input.length; i++) {
        vector[i] = parseFloat(input[i]);
    } console.log(vector);

    function copieVector() {
        for (var i = 0; i < vector.length; i++)
            vector2[i] = vector[i];
    } copieVector();

    function min(){
        var min = vector[0];
        for (var i = 0; i < vector.length; i++) {
            if (vector[i] <= min) {
                min = vector[i];
            }
        }
        console.log('Salariul cel mai mic este: ' + min);
    } min();

    function max(){
        var max = vector[0];
        for (var i = 0; i < vector.length; i++) {
            if (vector[i] >= max) {
                max = vector[i];
            }
        }
        console.log('Salariul cel mai mare este: ' + max);
    } max();

    function media() {
        var suma = 0;
        for (var i = 0; i < vector.length; i++) {
            suma += vector[i];
        }
        media = suma / vector.length;
        console.log('Media aritmetica a salariilor este: ' + media);
    } media();

    function formaCrescatoare() {
        vector.sort(function (a, b) {
            return a - b
        })
        console.log('Salariile aranjate crescator: ' + vector);
    } formaCrescatoare();

    function formaDescrescatoare() {
        vector.sort(function (a, b) {
            return b - a
        })
        console.log('Salariile aranjate descrescator: ' + vector);
    } formaDescrescatoare();

    function rotireaTabelului() {
        var primul = 0;
        for (var k = 0; k < 4; k++) {
            primul = vector2[0];
            for (var i = 0; i < vector2.length - 1; i++) {
                vector2[i] = vector2[i+1];
            }
        vector2[vector2.length - 1] = primul;
        } console.log('Rotirea tabelului la stanga cu 4 pozitii: ' + vector2);
    } rotireaTabelului();

    const sal = Number(document.getElementById('sal').value);
    vector2.push(sal);
    console.log('Adaugarea salariului ' + sal +' : ' + vector2);
    vector2.splice(0, 1);
    console.log('Stergerea unui salariu: ' + vector2);

    function salariu() {
    const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);
        var nr = 0;
        for (var i = 0; i < vector2.length; i++){
            if (vector2[i] >= x && vector2[i] <= y) { 
                nr+=1; 
            }
        } console.log('In total sunt ' + nr + ' persoane cu salariul între '+ x +' și '+ y);
    } salariu();
}