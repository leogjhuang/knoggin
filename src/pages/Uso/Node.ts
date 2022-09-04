import { drawCircle, drawText } from "./helper";
import { clamp } from "lodash";

export default class Node {
  createdAt: number = Date.now();
  x: number;
  y: number;
  radius: number;
  color: string;
  letter: string;

  duration: number;

  matched: boolean;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    letter: string,
    duration: number = 5000,
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.letter = letter;
    this.duration = duration;
  }

  update() {}

  render(ctx: CanvasRenderingContext2D) {
    const alpha = clamp(
      1 - (Date.now() - this.createdAt) / this.duration,
      0,
      1,
    );

    drawCircle(ctx, this.x, this.y, this.radius, this.color, {
      alpha,
    });

    drawText(ctx, this.letter, this.x, this.y, "30px Outfit", "white");
  }
}
