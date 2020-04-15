//ex. 1
document.getElementById('calculateBut').addEventListener("click", function(){
	const x = Number(document.getElementById('x').value);
	const y = Number(document.getElementById('y').value);
	document.getElementById('result').innerHTML = x + y;
});

//ex. 2
document.getElementById('calculateBut1').addEventListener("click", function(){
	const x = Number(document.getElementById('x').value);
	const y = Number(document.getElementById('y').value);
	document.getElementById('x').value = y;
	document.getElementById('y').value = x;
});

//ex. 3
document.getElementById('container').onmouseenter = function() {mouseEnter()};
document.getElementById('container').onmouseleave = function() {mouseLeave()};
function mouseEnter() {
	document.getElementById('container').style.backgroundColor = 'red';
}
function mouseLeave() {
	document.getElementById('container').style.backgroundColor = 'white';
}

//ex. 4
function Paragraph(){
	for (var i = 1; i <= 10; i++) {
		const element = document.createElement('element');
		element.innerText = `Paragraph Nr ${i}`;

		if (i % 2 === 0) {
			element.style.backgroundColor = 'blue';
		} else {
            element.style.backgroundColor = 'yellow';
        }
        document.getElementById('app').append(element)
    }
}Paragraph();

//ex 5 si 6
function Element(){
	const ol = document.createElement('ol');
	ol.id.list;

	for (let i = 1; i <= 10; i++) {
		const li = document.createElement('li');
		li.innerText = `Element Nr ${i}`;

		if (i === 10) {
			li.style.backgroundColor = '#8A2BE2';
		}
		ol.append(li)
	}
	document.getElementById('app').append(ol)
};Element();

//ex 7
function Stergere(){
	document.getElementById('button').addEventListener("click", function(){
		const list = document.getElementById('li');
		print(list[1]);
	})
	document.getElementById('app').append(document.getElementById('button'));
}Stergere();

//ex 8
function Circle(){
	for (var i = 1; i<=10; i++){
		const div = document.createElement('div');
		div.setAttribute('class', 'circle');
		document.getElementById('app').append(div)
	}
};Circle();

//ex 9
var nr = [9,1,8,6,4,3,2,7,33,12];
function Cresc(){
    nr.sort(function(a, b){return a - b});
    document.getElementById('result1').innerHTML = nr;
}Cresc();

//ex 13
function Create(){
	const ul = document.createElement('ul');
	const nr = [9,1,8,6,4,3,2,7,33,12];

	ul.id.list2;
	document.getElementById('app').append(ul);
	
	const li = document.createElement('li');
	li.innerText = nr[i];
	ul.append(li);
};Create();



