const body = document.querySelector('.wrap');

let r, g, b, opacity, square;
const interval = 100;
const genInterval = 200;
const SQUARES_NUMBER = 700;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  square = document.createElement('div');
  square.classList.add('square');
  body.append(square);
}
function colorGen() {
  opacity = +Math.random().toFixed(2);
  // r = 255;
  b = 255;
  // g = 255;
  r = +Math.floor(Math.random() * 252);
  // b = +Math.floor(Math.random() * 252);
  g = +Math.floor(Math.random() * 252);
}

let randomValue;
function randomElemGen() {
  let div = document.querySelectorAll('div');
  randomValue = div[Math.floor(Math.random() * div.length)];
}

function bl() {
  randomValue.style.borderLeft =
    '1px solid rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';
  randomValue.classList.add('borderLeft');
  setTimeout(() => {
    blh();
  }, interval);
}
function bb() {
  randomValue.style.borderBottom =
    '1px solid rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';
  randomValue.classList.add('borderBottom');
  setTimeout(() => {
    bbh();
  }, interval);
}
function bt() {
  randomValue.style.borderTop =
    '1px solid rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';
  randomValue.classList.add('borderTop');
  setTimeout(() => {
    bth();
  }, interval);
}
function br() {
  randomValue.style.borderRight =
    '1px solid rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';
  randomValue.classList.add('borderRight');
  setTimeout(() => {
    brh();
  }, interval);
}
function bs() {
  randomValue.style.boxShadow =
    '0 0 2px rgba(' +
    r +
    ', ' +
    g +
    ', ' +
    b +
    ',' +
    opacity +
    '), 0 0 10px rgba(' +
    r +
    ', ' +
    g +
    ', ' +
    b +
    ',' +
    opacity +
    '), 0 0 50px rgba(' +
    r +
    ', ' +
    g +
    ', ' +
    b +
    ',' +
    opacity +
    ')';
  randomValue.classList.add('boxShadow');
  setTimeout(() => {
    bsh();
  }, interval);
}
// function bg() {
//   randomValue.style.backgroundColor =
//     'rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';
//   randomValue.classList.add('backgroundColor');
//   setTimeout(() => {
//     bgh();
//   }, interval);
// }





function checkClass(e) {
  let div = document.querySelectorAll('div');
  div.forEach(item => {
    if (item.classList.contains(e)) {
      item.classList.remove(e);
    }
  });
}


// b - border
// b - bottom
// t - top
// l - left
// r - right
// h - hide

function blh() {
    let element = document.querySelector('borderLeft')
    element.style.borderLeft = '1px solid #000';
    checkClass('borderLeft');
}


function bbh() {
  let element = document.querySelector('borderBottom')
  element.style.borderBottom = '1px solid #000';
  checkClass("borderBottom");
}
function bth() {
  let element = document.querySelector('borderTop')
  element.style.borderTop = '1px solid #000';
  checkClass('borderTop');
}
function brh() {
  let element = document.querySelector('borderRight')
  element.style.borderRight = '1px solid #000';
  checkClass('borderRight');
}
function bsh() {
  let element = document.querySelector('boxShadow')
  element.style.boxShadow = '0 0 2px #000, 0 0 10px #000, 0 0 50px #000';
  checkClass('boxShadow');
}
function bgh() {
  let element = document.querySelector('backgroundColor')
  element.style.backgroundColor = '#000';
  checkClass('backgroundColor');
}
function blh() {
  let element = document.querySelector('borderLeft')
  element.style.backgroundColor = '#000';
  checkClass('borderLeft');
}


function borderGen() {
  colorGen();
  randomElemGen();
  bs();
  bl();
  colorGen();
  randomElemGen();
  bb();
  colorGen();
  randomElemGen();
  br();
  colorGen();
  randomElemGen();
  bt();
  randomElemGen();
  bg();
}

setInterval(() => {
  borderGen();
}, genInterval);
