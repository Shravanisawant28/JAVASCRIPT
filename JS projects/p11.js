// const canvas = document.getElementById("gameCanvas")
// const ctx = canvas.getContext("2d")

// const box=20
// const canvasSize=canvas.width
// const rows=convasSize
// const columns = convasSize


// let snake=[{x:8 * box,y:8*box}]
// let food={
//     x:Math.floor(Math.random()*columns)*box,
//     y:Math.floor(Math.random()*rows)*box
// }

// let direction=null
// let score=0

// function draw(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)

//     ctx.fillStyle="lime"

//     snake.forEach(segment=>{
//         ctx.fillRect(segment.x, segment.y, box,box)
//     })

// ctx.fillStyle="red"
// ctx.fillRect(food.x , food.y ,box,box)
// ctx.fillStyle="white"
// ctx.font="20px Arial"
// ctx.fillText("Score: "+score,10 ,20)
// }

// function update(){
//     const head={...snake[0]}
// }

// if(direction=="UP")head.y -=box
// if(direction=="DOWN")head.y +=box
// if(direction=="LEFT")head.x -=box
// if(direction=="RIGHT")head.x +=box

// snake.unshift(head)

// if (head.x===food.x && head.y===food.y){
//     score++;
//     food={
//         x:Math.floor(Math.random()*columns)*box,
//         y:Math.floor(Math.random()*rows)*box   
//     }
//     }else{
//         snake.pop()
// }


// if (head.x <0|| head.x>=canvas.width||head.y<0||head.y>=canvas.height||snake.slice(1).some(segment=>segment.x===head.x&&segment.y===head.y)){
//     clearInterval(gmae)
//     alert("Game Over! Your Score is :" +score)
// }

// function changeDirection(event){
//     if(event.key=="ArrowUp"&& direction !=="DOWN")direction="UP"
//     if(event.key=="ArrowDown"&& direction !=="UP")direction="DOWN"
//     if(event.key=="ArrowLeft"&& direction !=="RIGHT")direction="LEFT"
//     if(event.key=="ArrowRight"&& direction !=="LEFT")direction="RIGHT"
// }

// document.addEventListener("keydown", changeDirection)

// const game=setInterval(()=>{
//     update()
//     draw()
// },100
// );


// Get canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set game constants
const box = 20; // Size of each grid box
const canvasSize = canvas.width;
const rows = canvasSize / box;
const columns = canvasSize / box;

// Snake and food
let snake = [{ x: 8 * box, y: 8 * box }]; // Initial snake position
let food = { 
  x: Math.floor(Math.random() * columns) * box,
  y: Math.floor(Math.random() * rows) * box
};

// Direction
let direction = null;

// Score
let score = 0;

// Draw snake and food
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  ctx.fillStyle = "lime";
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, box, box);
  });

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Display score
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

// Update snake position
function update() {
  const head = { ...snake[0] }; // Copy the head

  // Move head based on direction
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;

  // Add new head to the front of the snake
  snake.unshift(head);

  // Check for food collision
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * columns) * box,
      y: Math.floor(Math.random() * rows) * box
    };
  } else {
    // Remove last segment if no food eaten
    snake.pop();
  }

  // Check for collisions
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height ||
      snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
    clearInterval(game);
    alert("Game Over! Your score: " + score);
  }
}

// Change direction
function changeDirection(event) {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

// Event listener for keyboard
document.addEventListener("keydown", changeDirection);

// Game loop
const game = setInterval(() => {
  update();
  draw();
}, 200);
