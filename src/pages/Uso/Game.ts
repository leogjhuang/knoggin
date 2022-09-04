import { keys } from "../SudoType/constants";
import Node from "./Node";
import { mouse } from ".";
import { drawText } from "./helper";

export enum GameState {
  Ready,
  Playing,
  GameOver,
}

export class Game {
  state: GameState = GameState.Ready;

  nodes: Node[] = [];
  lastAddedTime: number = Date.now();

  score = 0;
  lostNodes: number = 0;
  addedNodes = 0;

  pressedKey: string;

  constructor(private readonly maxNodes: number) {}

  update(canvas: HTMLCanvasElement) {
    if (
      Date.now() - this.lastAddedTime > 1000 &&
      this.state === GameState.Playing &&
      this.addedNodes < this.maxNodes
    ) {
      this.lastAddedTime = Date.now();
      this.nodes.push(
        new Node(
          Math.random() * (canvas.width - 100) + 50,
          Math.random() * (canvas.height - 100) + 50,
          Math.random() * 10 + 20,
          "red",
          keys[Math.floor(Math.random() * keys.length)],
          5000 - this.addedNodes * 100,
        ),
      );

      this.addedNodes++;
    }

    if (this.addedNodes >= this.maxNodes && this.nodes.length === 0) {
      this.state = GameState.GameOver;
    }

    this.nodes.forEach((node) => {
      const distance = Math.sqrt(
        Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2),
      );

      if (distance < node.radius + 20 && game.pressedKey === node.letter) {
        node.matched = true;
        this.score++;
      }

      if (Date.now() - node.createdAt > node.duration) {
        node.matched = true;
        this.lostNodes++;
      }

      node.update();
    });

    for (let i = this.nodes.length - 1; i >= 0; i--) {
      if (this.nodes[i].matched) {
        this.nodes.splice(i, 1);
      }
    }
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.nodes.forEach((node) => {
      node.render(ctx);
    });

    this.drawGUI(ctx, canvas);
  }

  drawGUI(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    if (game.state === GameState.Ready) {
      drawText(
        ctx,
        "Press any key to start",
        canvas.width / 2,
        canvas.height / 2,
        "30px Outfit",
        "white",
      );
    } else if (game.state === GameState.Playing) {
      drawText(
        ctx,
        "Score: " + game.score,
        10,
        30,
        "30px Outfit",
        "white",
        "left",
      );
    } else if (game.state === GameState.GameOver) {
      drawText(
        ctx,
        "Game Over",
        canvas.width / 2,
        canvas.height / 2 - 100,
        "30px Outfit",
        "white",
      );

      drawText(
        ctx,
        "Completion rate: " +
          Math.floor((game.score / game.maxNodes) * 100) +
          "%",
        canvas.width / 2,
        canvas.height / 2,
        "30px Outfit",
        "white",
      );
    }
  }
}

const game = new Game(40);

export default game;
