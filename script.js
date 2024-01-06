let snake = [{x:2,y:10}];
const board = document.getElementById("game");
console.log(board)
const instruct = document.querySelector(".instruct");
let direction = "right";
const gridSize = 20;
let food = generateFoodPos();
let snakeTimer;
let gameStarted=false;
let lastPoop = Date.now();
let poopDelay = 20000;
let poop;
function draw() {
    board.innerHTML = '';
    generateSnake();
    generateFood();
    generatePoop();
  }
const generateSnake = ()=>{
snake.map((item)=>{
    const newSnake = generateItem("snake",item);
    board.appendChild(newSnake);
})
}
const generateFood=()=>{
    const foodItem = generateItem("item",food);
    board.appendChild(foodItem)
}
const generatePoop=()=>{
    if(poop && snake.length>5){
        const poopItem = generateItem("poop",poop);
        console.log("poop",poop)
        board.appendChild(poopItem);
    }
}
function generateFoodPos(){
    const x = Math.floor(Math.random() * gridSize)+1
    const y = Math.floor(Math.random() * gridSize)+1
    let foundObject = snake.find(obj => obj.x === x && obj.y === y);
    if(foundObject){
        return generateFoodPos();
    }
    return {x,y};
}
function generateItem(tag,pos){
    if(gameStarted){
        const item = document.createElement("div");
        item.className=tag;
        item.style.gridRow = pos.x
        item.style.gridColumn = pos.y;
        return item;
    }
}

function move(){

    const head = {...snake[0]};
  switch(direction){
    case 'right':
        head.y++;
        break;
    case 'left':
        head.y--;
        break;
    case 'up':
        head.x--;
        break;
    case 'down':
        head.x++;
        break;
  }
  snake.unshift(head);
  if(eatFood(head)){
    food = generateFoodPos();
    startGame()
  }
  else{
let tail = snake.pop();
if(Date.now()-lastPoop>poopDelay){
    poop = tail;
    lastPoop = Date.now();
}
  } 
}
function startGame(){
    gameStarted=true;
    instruct.style.display='none'
        clearInterval(snakeTimer)
        snakeTimer = setInterval(()=>{
            move()
            checkCollision();
            draw()
        },200);
    }
function resetGame(){
    clearInterval(snakeTimer)
    board.innerHTML="";
    poop=null;
    instruct.style.display='block';
    snake=[{x:2,y:10}];
    direction="right"
    gameStarted = false;
}
function checkCollision(){
    const head = snake[0];
if(head.x<1 || head.x>20 || head.y<1 || head.y>20){
    resetGame()
}
for(let i=1;i<snake.length;i++){
if(head.x==snake[i].x && head.y==snake[i].y){
    resetGame()
}
}
if(poop && head.x==poop.x && head.y==poop.y){
    snake.splice(-2);
    poop=null;
    lastPoop = Date.now();
    startGame();
}
}

function eatFood(head){
    if(head.x==food.x && head.y==food.y) return true;
    return false; 
}

document.addEventListener("keydown",(e)=>{

    if (
        (!gameStarted && e.code === 'Space') ||
        (!gameStarted && e.key === ' ')
      ) {
        startGame();
      }
        else{
    switch(e.key){
        case "ArrowUp":
            direction="up"
            break;
        case "ArrowDown":
            direction="down"
            break;
        case "ArrowRight":
            direction="right"
            break;
        case "ArrowLeft":
            direction="left"
            break;
    }
}
})