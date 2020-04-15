console.log("Laborator 1");
nr = [];

function checkInput(ob) {
    var invalidChars = /[^0-9-,-.]/gi
    if(invalidChars.test(ob.value)) {
        ob.value = ob.value.replace(invalidChars,"");
    }
} 

function getInputValue() {
    input = document.getElementById("myInput").value.split(',');
    for (i = 0; i < input.length; i++) {
        nr[i] = parseFloat(input[i]);
    } console.log(nr);

    function Minimum() {
    	var minim = Math.min.apply(null, nr);
    	console.log(" Înălțimea minimă este: ", minim)
    }Minimum()

    function Maximum() {
    	var maxim = Math.max.apply(null, nr);
    	console.log("Înălțimea maximă este: ", maxim)
    }Maximum()

    function Media(){
    	var mediam = nr.reduce((a,b) => a += b) / nr.length
    	console.log("Media înălțimii este: ", mediam.toFixed(2))
    }Media()

    function Cresc(){
    	nr.sort(function(a, b){return a - b});
    	console.log("Înălțimile aranjate crescător:", nr)
    }Cresc()

    function DesCresc(){
    	nr.sort(function(a, b){return b - a});
    	console.log("Înălțimile aranjate descrescător:", nr)
    }DesCresc()

    function Rotire(){
    	var a = 0;
    	a = nr[0];
    	for (var i = 0; i < nr.length - 1; i++){
    		nr[i] = nr [i+1];
    	}
    	nr[nr.length - 1] = a;
    	console.log('Rotire la stânga cu 1 poziție: ' + nr)
    } Rotire();

    function Adaugare(){
    	const inalt = 3.42;
    	nr.push(inalt);    
    	console.log('Adăugarea cifrei ' + inalt + ' : ' + nr)
    }Adaugare()

    function Stergere(){
    	nr.splice(1,2);    
    	console.log('Ștergerea cifrei de pe poziția 1 și 2: ' + nr)
    }Stergere()

    function Interval() {
    	const b = 1.4;
    	const c = 5.2;
    	var k = 0;
        for (var i = 0; i < nr.length; i++){
            if (nr[i] >= b && nr[i] <= c) { 
            	k+=1; 
            }
        } console.log('Sunt ' + k + ' sportivi cu înălțimile între '+ b +' și '+ c)
    }Interval()
}