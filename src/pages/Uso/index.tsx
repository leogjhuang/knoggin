import * as React from "react";
import "./styles.scss";
import * as $ from "jquery";
import { drawCircle, drawRectangle, drawText } from "./helper";
import { init as initKontra } from "kontra";
import game, { GameState } from "./Game";
import BackButton from "../../components/BackButton";

export const mouse = {
  x: 0,
  y: 0,
};

const Uso: React.FC = () => {
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = React.useState(false);

  React.useEffect(() => {
    initKontra();

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;

    const update = () => {
      game.update(canvas);
    };

    const animate = () => {
      requestAnimationFrame(() => animate());

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawRectangle(ctx, 0, 0, canvas.width, canvas.height, "black");

      game.render(ctx, canvas);

      drawCircle(ctx, mouse.x, mouse.y, 20, game.pressedKey ? "lime" : "red");

      if (game.pressedKey) {
        drawText(
          ctx,
          game.pressedKey,
          mouse.x,
          mouse.y,
          "30px Outfit",
          "white",
        );
      }

      update();
    };

    animate();

    $(canvas).mousemove(function (e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    $(document)
      .on("keydown", (e) => {
        game.state = GameState.Playing;

        const isAlphabet = /[a-zA-Z]/.test(String.fromCharCode(e.keyCode));
        if (isAlphabet) {
          game.pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
        }
      })
      .on("keyup", () => {
        game.pressedKey = null;
      });
  }, []);

  return (
    <>
      <BackButton />
      <div id="home">
        <h2>Uso!</h2>

        <canvas
          id="canvas"
          style={{
            cursor: "none",
          }}
        ></canvas>
        <div className="uso__title"></div>
      </div>
    </>
  );
};

export default Uso;
