import { time } from "console";
import * as React from "react";
import "./styles.scss";
import * as ReactDOM from "react-dom";
import BackButton from "../../components/BackButton";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";

const Stroop: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);

  const [rightAnswer, setRightAnswer] = React.useState(0);
  const [wrongAnswer, setWrongAnswer] = React.useState(0);

  const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
  ];

  const [correctColor, setCorrectColor] = React.useState(
    colors[Math.floor(Math.random() * colors.length)],
  );

  const checkCorrect = (param) => {
    if (!isGameStarted) {
      setIsGameStarted(true);
      setStartTime(Date.now());
    }

    console.log(param);

    var result = param.c;
    if (result == correctColor) {
      setCorrectColor(colors[Math.floor(Math.random() * colors.length)]);
      setRightAnswer(rightAnswer + 1);
      if (rightAnswer == 9) {
        setIsGameOver(true);
        return;
      }
    } else {
      setWrongAnswer(wrongAnswer + 1);
      if (rightAnswer == 10) {
        setIsGameOver(true);
        return;
      }
    }
  };

  function ColorList(props) {
    const colors = props.colors;
    const listItems = colors.map((c) => (
      <button style={{ color: c }} onClick={(event) => checkCorrect({ c })}>
        {c}
      </button>
    ));
    return <div>{listItems}</div>;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <BackButton />
      {!isGameOver ? (
        <div className="Stroop-Container">
          <h2>Stroop</h2>

          <h1 style={{ color: correctColor }}>
            {colors[Math.floor(Math.random() * colors.length)]}
          </h1>
          <div>
            <ColorList colors={colors} />
          </div>
        </div>
      ) : (
        <div className="Stroop-Container">
          <h2>Stroop</h2>

          <h1 style={{ color: "white" }}>Game Over</h1>
          <div>
            <h5>
              {rightAnswer} correct answers and {wrongAnswer} wrong answers in{" "}
              {(Date.now() - startTime) / 1000} seconds
            </h5>
          </div>
        </div>
      )}
    </>
  );
};

export default Stroop;
