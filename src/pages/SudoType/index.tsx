import * as React from "react";
import "./styles.scss";
import { textToMatch, keys } from "./constants";
import BackButton from "../../components/BackButton";

const KeyBox: React.FC<any> = ({ letter, addUnderline }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
        width: "50px",
        textAlign: "center",
        textDecoration: addUnderline ? "underline" : "none",
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
};

interface KeyRowProps {
  keys: string[];
  addUnderline?: boolean;
  style?: React.CSSProperties;
}

const KeyRow: React.FC<KeyRowProps> = ({ keys, addUnderline, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginBottom: "10px",
        ...style,
      }}
    >
      {keys.map((letter, key) => {
        const underline = key == 3 || key == 6 ? addUnderline : false;
        if (addUnderline) {
          return <KeyBox key={key} letter={letter} addUnderline={underline} />;
        }

        return <KeyBox key={key} letter={letter} />;
      })}
    </div>
  );
};

const KeyBoard: React.FC<any> = ({ randomKeys }) => {
  let first = randomKeys.slice(0, 10);
  let second = randomKeys.slice(10, 19);
  let third = randomKeys.slice(19, 26);

  return (
    <>
      <KeyRow keys={first} />
      <KeyRow keys={second} addUnderline />
      <KeyRow
        keys={third}
        style={{
          transform: "translate(-30px, 0)",
        }}
      />
    </>
  );
};

const Sudotype: React.FC = () => {
  const [correctText, setCorrectText] = React.useState("");
  const [amountOfWrongLetters, setAmountOfWrongLetters] = React.useState(0);
  const [wpm, setWpm] = React.useState(0);
  const [cpm, setCpm] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [randomKeys, setRandomKeys] = React.useState([]);

  const calculateWpm = () => {
    const time = Date.now() - startTime;
    const wpm = Math.round(textToMatch.length / 5 / (time / 1000 / 60));
    setWpm(wpm);
  };

  const calculateCpm = () => {
    const time = Date.now() - startTime;
    const cpm = Math.round(textToMatch.length / (time / 1000 / 60));
    setCpm(cpm);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isGameStarted) {
      setIsGameStarted(true);
      setStartTime(Date.now());
    }

    if (!e.key) return;

    if (e.key === "Backspace") {
      setCorrectText(correctText.slice(0, -1));
      return;
    }

    const isAlphabet = /[a-zA-Z0-9-_ ]/.test(String.fromCharCode(e.keyCode));

    if (!isAlphabet) {
      return;
    }

    let convertedKey;
    if (e.key === " ") {
      convertedKey = " ";
    } else {
      const isUppercase = e.key.toUpperCase() === e.key;

      const keyIndex = keys.indexOf(e.key.toLowerCase());

      if (!randomKeys[keyIndex]) {
        setAmountOfWrongLetters(amountOfWrongLetters + 1);
        return;
      }

      convertedKey = isUppercase
        ? randomKeys[keyIndex].toUpperCase()
        : randomKeys[keyIndex];
    }

    const newCorrectText = correctText + convertedKey;
    // Check if the new correct text is the same as the text to match
    if (textToMatch.indexOf(newCorrectText) === 0) {
      setCorrectText(newCorrectText);

      if (newCorrectText.length === textToMatch.length) {
        setIsGameOver(true);
      }
    } else if (/[a-zA-Z0-9-_ ]/.test(String.fromCharCode(e.keyCode))) {
      setAmountOfWrongLetters(amountOfWrongLetters + 1);
    }

    calculateWpm();
    calculateCpm();
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target.value = "";
  };

  React.useEffect(() => {
    const copyKeys = keys.slice(0);
    setRandomKeys(copyKeys.sort(() => Math.random() - 0.5));
  }, []);

  React.useEffect(() => {
    if (isGameOver) {
      setIsGameStarted(false);

      console.log("Wpm: ", wpm);
      console.log("Cpm: ", cpm);
      console.log("Characters wrong: ", amountOfWrongLetters);
    }
  }, [isGameOver]);

  return (
    <>
      <BackButton />
      <div id="home">
        <h2>Sudotype</h2>
        <br />

        <div
          style={{
            maxWidth: "600px",
            maxHeight: "200px",
            overflow: "scroll",
          }}
        >
          <span>{correctText}</span>
          <span style={{ color: "grey" }}>
            {textToMatch.slice(correctText.length)}
          </span>
        </div>

        <br />

        <input
          autoFocus
          className="input-race"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          // onKeyPress={e => this.onKeyPress(e)}
          // onChange={value => this.handleChange(value)}
          // maxLength={quote.length}
          // disabled={disabled || finished}
          style={{
            border: "none",
            outline: "none",
            height: "50px",
          }}
        />

        <br />
        <br />

        <KeyBoard randomKeys={randomKeys} />
      </div>
    </>
  );
};

export default Sudotype;
