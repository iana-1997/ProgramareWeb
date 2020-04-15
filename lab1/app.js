const ex1 = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    const result = document.getElementById('result');

    result.innerText = Number(document.getElementById('inputy').value) + Number(document.getElementById('inputx').value)
  })
};

const ex2 = () => {
  const button = document.getElementById('button1');

  button.addEventListener('click', () => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp
  })
};

const ex3 = () => {
  const container = document.getElementById('container');

  container.addEventListener('mouseover', () => {
    container.setAttribute('class', 'green')
  })
};

const ex4 = () => {
  const app = document.getElementById('app');

  for (let i = 1; i <= 10; i++) {
    const p = document.createElement('p');
    p.innerText = `Paragraph NR ${i}`;

    if (i % 2 === 0) {
      p.setAttribute('style', 'background: blue')
    } else {
      p.setAttribute('style', 'background: yellow')
    }

    app.append(p)
  }
};

const ex5andEx6 = () => {
  const app = document.getElementById('app');
  const ol = document.createElement('ol');

  ol.setAttribute('id', 'list');

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.innerText = `Element NR ${i}`;

    if (i === 10) {
      li.setAttribute('style', 'background: violet')
    }

    ol.append(li)
  }

  app.append(ol)
};

const ex7 = () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');

  button.innerText = 'Remove el 5';

  button.addEventListener('click', () => {
    const list = document.getElementById('list');
    list.removeChild(list.childNodes[4]);
  });

  app.append(button)
};

const ex8 = () => {
  const app = document.getElementById('app');

  for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'circle');
    app.append(div)
  }
};

const ex9 = () => {
const app = document.getElementById('app');
const array = [5, 6, 2, 1, 5, 6, 7, 8, 9, 10];
const sortedArray = array.sort((a, b) => a - b);

for (let i = 0; i < sortedArray.length; i++) {
const div = document.createElement('div');
div.innerText = sortedArray[i];
app.append(div)
}
};

const ex10 = () => {
  const app = document.getElementById('app');

  setTimeout(() => {
    app.setAttribute('style', 'background: gray')
  }, 5000)
};

const ex11 = () => {
  const list = document.getElementById('list');

  setInterval(() => {
    const li = document.createElement('li');
    li.innerText = `Element NR ${list.childNodes.length + 1}`;
    list.append(li)
  }, 10000)
};

const ex12 = () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');

  button.innerText = 'Counter 1';

  button.addEventListener('click', () => {
    button.innerText = `${button.innerText.split(' ')[0]} ${Number(button.innerText.split(' ')[1]) + 1}`;
  });

  app.append(button)
};

const ex13 = () => {
  const app = document.getElementById('app');
  const ul = document.createElement('ul');
  const array = [1, 4, 5, 6, 7, 8, 0, 9, 6, 3];

  ul.setAttribute('id', 'list2');
  app.append(ul);

  let i = 0;

  setInterval(() => {
    if (i < array.length) {
      const li = document.createElement('li');

      li.innerText = array[i];
      ul.append(li);
      i++
    }
  }, 1000)
};

const ex14 = () => {
  setTimeout(() => {
    const list = document.getElementById('list2');

    for (let i = 0; i < list.childNodes.length; i++) {
      list.childNodes[i].setAttribute('title', Number(list.childNodes[i].innerText) ** 2)
    }
  }, 10000)
};


ex1();
ex2();
ex3();
ex4();
ex5andEx6();
ex7();
ex8();
ex9();
ex10();
ex11();
ex12();
ex13();
ex14();




// exercitiu 1
function addition() {
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  if (isNaN(a)==true) a=0;
  if (isNaN(b)==true) b=0;
  var c = a + b;
  document.getElementById('result').innerHTML = a + " + " + b + " = " + c;
}

// exercitiu 5
var items = ['unu', 'doi', 'trei', 'patru', 'cinci'];
var ol = document.querySelector('ol');
items.forEach(function(item) {
  var li = document.createElement('li');
  li.innerHTML = item;
  ol.appendChild(li);
});


// exercitiu 12
var count = 0;
  function func() {
  var plusButton = document.getElementsByClassName("button_plus");
  if (document.onclick = plusButton) {
    count++;
    console.log(count);
    }
    };


// // // exercitiu 10 (trebuie de scos comentariu)
function loaded() {
  changeColor(); 
  var now = new Date().getTime(); 
  var remain = 5000 - (now % 5000); 
  setTimeout(function () {
    setInterval(changeColor, 5 * 500);
  }, remain);
}
function changeColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.body.style.backgroundColor = rgb;
}

// exercitiu 9 si 7
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
elem.innerHTML += `Crescator: ${arr.sort()}. <br>`;
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
secondArray.splice(4, 1);
elem.innerHTML += `Stergerea: ${secondArray}. <br>`;




/*** Exercitiu 5 7  ***/
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
secondArray.splice(4, 1);
elem.innerHTML += `A 5 Valoare este stearsa: ${secondArray}. <br>`;

/*** Exercitiu 9 ***/
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50));
elem.innerHTML += `Crescator: ${arr.sort()}. <br>`;

/*** Exercitiu 10 ***/
function loaded() {
changeColor();
var now = new Date().getTime();
var remain = 5000 - (now % 5000);
setTimeout(function () {
setInterval(changeColor, 5 * 500);
}, remain);
}
function changeColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
document.body.style.backgroundColor = rgb;
}

/*** Exercitiu 12 ***/
var count = 0;
function func() {
    var plusButton = document.getElementsByClassName("button_plus");
    if (document.onclick = plusButton) {
        count++;
        console.log(count);
    }
};



