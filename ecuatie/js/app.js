document.getElementById('calculateBut').addEventListener("click", function(){
	const A = Number(document.getElementById('A').value);
	const B = Number(document.getElementById('B').value);
	const C = Number(document.getElementById('C').value);
	if(A >  0) { 
		document.getElementById('result').innerHTML = (C-B)/A; 
	}
	 else { 
	 	document.getElementById('result').innerHTML = "Ecuatia nu exista";
	 }

	});