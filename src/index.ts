import { CanvasView } from './view/CanvasView';
import { Ball } from './sprites/Ball';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';
//Images

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

//Level and Colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SIZE,
  BALL_SPEED,
  BALL_STARTX,
  BALL_STARTY,
} from './setup';
//Helpers
import { createBricks } from './helpers';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over!');
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo('Game Won!');
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[]
  //  padding: Paddle,
  //  ball: Ball
) {
  view.clear();
  view.drawBricks(bricks);
  requestAnimationFrame(() => gameLoop(view, bricks));
}

function startGame(view: CanvasView) {
  //reset displays
  score = 0;
  view.drawInfo('');
  view.drawScore(0);
  const bricks = createBricks();
  console.log(bricks);
  gameLoop(view, bricks);
}

//Create a new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);
