console.log('Laborator 1')

var nr = new Array();
nr[0] = [2, 5, 8, 4, 10, 8];
nr[1] = [4, 3, 7, 8, 9, 12];
nr[2] = [6, 2, 8, 10, 4, 2];

console.log('Notele sunt: ' )
for (i=0; i<nr.length; i++)
    {
        console.log(nr[i])
    }

// valoarea minima
function Minimum() {
    var minim = Math.min.apply(null, nr[0]);
    var minim1 = Math.min.apply(null, nr[1]);
    var minim2 = Math.min.apply(null, nr[2]);
    console.log("Minimul este: ")
    console.log(minim);
    console.log(minim1);
    console.log(minim2)
}Minimum()

//valoarea maxima
function Maximum() {
    var maxim = Math.max.apply(null, nr[0]);
    var maxim1 = Math.max.apply(null, nr[1]);
    var maxim2 = Math.max.apply(null, nr[2]);
    console.log("Maximul este: ");
    console.log(maxim);
    console.log(maxim1);
    console.log(maxim2)
}Maximum()

//media aritmetica
function Media(){
    var mediam = nr[0].reduce((a,b) => a += b) / nr[0].length
    var mediam1 = nr[1].reduce((a,b) => a += b) / nr[1].length
    var mediam2 = nr[2].reduce((a,b) => a += b) / nr[2].length
    console.log("Media aritmetica este: ");
    console.log(mediam.toFixed(2));
    console.log(mediam1.toFixed(2));
    console.log(mediam2.toFixed(2))
}Media()

//aranjarea crescator
function Cresc(){
    nr[0].sort(function(a, b){return a - b});
    nr[1].sort(function(a, b){return a - b});
    nr[2].sort(function(a, b){return a - b});
    console.log("Crescator este:");
    console.log(nr[0]);
    console.log(nr[1]);
    console.log(nr[2]);
}Cresc()

//aranjarea descrescator
function DesCresc(){
    nr[0].sort(function(a, b){return b - a});
    nr[1].sort(function(a, b){return b - a});
    nr[2].sort(function(a, b){return b - a});
    console.log("Descrescator este:");
    console.log(nr[0]);
    console.log(nr[1]);
    console.log(nr[2]);
}DesCresc()

//Rotire la stanga
function Rotire(){
    var arr = [];
    arr[0]=nr[1][nr[1].length-1];
    for (var i = 0; i < nr[1].length-1; i++){
        arr[i+1] = nr[1][i];
    }
    console.log('Rotirea la stanga :' + arr);
}Rotire();

//Adaugarea datelor
function Adaugare(){
    nr[0].push(4); 
    nr[1].push(2);
    nr[2].push(15);   
    console.log('Tabelul cu cifra adaugata: ');
    console.log(nr[0]);
    console.log(nr[1]);
    console.log(nr[2]);
}Adaugare()

//Stergerea datelor
function Stergere(){
    nr[0].splice(-4); 
    nr[1].splice(2);
    nr[2].splice(1,2);   
    console.log('Tabelul cu cifra stearsa: ');
    console.log(nr[0]);
    console.log(nr[1]);
    console.log(nr[2]);
}Stergere()


function Inaltime() {
    var num = 0;
    var s = 0;
    for (var i = 0; i <= nr[1].length; i++){
            if (nr[1][i] >= 3 && nr[1][i] < 9)
            {
                num +=1;
            }
            s = nr[1].length
        }
        console.log('In total sunt --> ' + s+ ' sportivi cu inaltimea intre 3 si 9');
    }Inaltime();
