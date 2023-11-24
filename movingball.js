var max_time = 50;
var interval = 0;
var velocity = 5;
var position = 20;

var positionX = [400, 100, 700];
var positionY = [800, 600, 200];
var reverseX = ['false','false','false'];
var reverseY = ['false','false','false'];

//var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
/* var blueColors = ['#0000ff', '#3399ff', '#66ccff'];
var purpleColors = ['#8521ac', '#743cbb', '#634ac9'];
var yellowColors = ['#ac9321', '#bb9b3c', '#c9632a'];
*/ 
var doubleArrayColor = [
    ['#0000ff', '#3399ff', '#66ccff'],
    ['#8521ac', '#743cbb', '#634a66'],
    ['#ac9321', '#bb9b3c', '#c9632a']
];

var randomColor;
var currentIndex=[0,0,0];

/* const { remote } = require('electron');
const currentWindow = remote.getCurrentWindow();

const windowWidth = currentWindow.getSize()[0];
const windowHeight = currentWindow.getSize()[1];
*/ 
var maxX = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
var maxY = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
var minX = 0;
var minY = 0;

var ball = document.getElementById('ball');
var ball_1 = document.getElementById('ball_1');
var ball_2 = document.getElementById('ball_2');
/* var container = document.getElementById('container');
container.style.width = maxX + 100 + 'px';
container.style.height = maxY + 'px';
*/

// index balls
// var ArrayBall = ['ball', 'ball_1', 'ball_2'];
var ArrayBall = [document.getElementById('ball'), 
                 document.getElementById('ball_1'),
                 document.getElementById('ball_2')
                ];
ArrayBall[0].style.left = maxX + 'px';
/* let Ball_Index = ArrayBall.length;
for (let i=0; i <= ArrayBall.length; i++)
{
   ArrayBall[i].style.background = color[i];

   ArrayBall[i] = ball;
   ArrayBall[i].style.background = color
}
IndexBall[1]ball.style.left = positionX + 'px';
ball.style.top  = positionY + 'px';
*/

function move_position() {
  //interval = interval + 1;
  /* position = position + velocity;
  let quotient = Math.floor(interval / max_time);

  if ((quotient % 2) === 0) {
    position = position + velocity;
  } else {
    position = position - (velocity * 3);
  } */



 /* ball.style.width = positionX + 'px';
 ball.style.height = positionX + 'px'; */
 
// Random color 
// randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
 //randomIndex = Math.floor(Math.random() * colors.length);
    
 // Background color
 //ball.style.backgroundColor = colors[randomIndex];
 for (let i=0; i < ArrayBall.length; i++)
 {
    // ArrayBall[i].style.backgroundColor = Math.floor(Math.random() * doubleArrayColor[i].length);
    ArrayBall[i].style.backgroundColor = doubleArrayColor[i][currentIndex[i]];
    currentIndex[i] = (currentIndex[i] + 1) % doubleArrayColor[i].length;

    //doubleArrayColor[i][j];
    if (reverseX[i] === false) {
        positionX[i] = positionX[i] + velocity;
    }
    else {
        positionX[i] = positionX[i] - velocity ;
     }
    
     if (reverseY[i] === false) {
        positionY[i] = positionY[i] + velocity;
    }
    else {
        positionY[i] = positionY[i] - velocity;
     }

    ArrayBall[i].style.left = positionX[i] + 'px';
    ArrayBall[i].style.top = positionY[i] + 'px';
  
    
    if (positionX[i] > maxX || positionX[i] === minX) { 
        reverseX[i] = !reverseX[i];
    }
    
    if (positionY[i] > maxY || positionY[i] === minY) {
        reverseY[i] = !reverseY[i];
  }
   // ArrayBall[i].style.width = positionX + 'px';
   // ArrayBall[i].style.height = positionX +'px';
 }

}
 setInterval(move_position, 20);

/*
 if(reverseY){
    positionY = positiony + velocityy;
    ball.style.top = positiony + 'px';
  } 
  else{
    positiony = positiony - velocityy;
    ball.style.top = positiony + 'px';
  }
*/
/****  RYU 
if (positionX >= maxX || positionX == minX) {
      reverse = !reverse; // 
   }
if (positionY >= maxY || positionY == minY) {
    reverse = !reverse; // 
 }

/****  RYU*/
//setInterval(move_position, 10);