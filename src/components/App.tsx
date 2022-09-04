import * as React from "react";
import "./../assets/scss/App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { MemoryRouter, Outlet, useLocation } from "react-router";
import Home from "./Home";
import Sudotype from "../pages/SudoType";
import Uso from "../pages/Uso";
import SudotypeData from "./SudotypeData";
import UsoData from "./UsoData";
import Menu from "./Menu";
import StroopData from "./StroopData";
import Stroop from "../pages/Stroop";

const stroopText = `The Stroop Task is one of the best known psychological experiments named
  after John Ridley Stroop. The Stroop phenomenon demonstrates that it is 
  difficult to name the ink color of a color word if there is a mismatch 
  between ink color and word.  In the past, the Stroop test was used to examine patterns of
   cognitive decline in Alzheimer-type dementia (ATD) and non-Alzheimer dementia. /

  In this game, we'll not only ask you the colour of the word that shows 
  up on the screen, but we'll switch it up and also ask you the word (rather than 
  the colour), so keep your eyes sharp!`;

const usoText = `Hover over the letter with your mouse and type in the letter as you hover. /

  Plenty of research concludes that fine motor skills are greatly correlated to dementia 
  severity and neurodegenerative diseases in general. Furthermore, early awareness of advanced 
  dementia could be increased by evaluating fine motor skill disability. In addition, studies 
  show that brain-challenging activities delay declines in cognitive skills and onsets of Alzheimer's. /
  
  In this game, we are targeting YOUR ability to multitask using your hands (can you tap your head with 
    one hand, rub your belly with the other, and switch it up every five seconds?) and rapid eye
    tracking across a screen.  
  `;

const sudoText = `
How fast can you learn? /

Our game provides you with a randomized keyboard for you to complete a typing test.  
It tests how fast you can learn and memorize a new sequence of keys in a short period of time. /

This game supports the findings that learning slows the progression of Alzheimer’s disease 
by delaying the growth of brain lesions that are the hallmarks of Alzheimer’s disease. 
By providing you with a new and randomized keyboard, this game lets your brain train 
itself in a short time in a typing test. Rather than relying on muscle memory, you are forced
 to learn a new set of patterns as fast as possible!

  `;

const App = () => {
  const initialSearchParam = new URLSearchParams(window.location.search);
  const initialPath = initialSearchParam.get("path") || "/";

  return (
    <MemoryRouter initialEntries={["/", initialPath]}>
      <Routes>
        <Route path="/sudotype" element={<Sudotype />} />
        <Route path="/Sudotype-data" element={<SudotypeData />} />
        <Route path="/uso" element={<Uso />} />
        <Route path="/Uso-data" element={<UsoData />} />{" "}
        <Route path="/Stroop" element={<Stroop />} />
        <Route path="/Stroop-data" element={<StroopData />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/menu-sudo"
          element={<Menu title="Sudotype" name="sudo" text={sudoText} />}
        />
        <Route
          path="/menu-uso"
          element={<Menu title="Uso" name="uso" text={usoText} />}
        />
        <Route
          path="/menu-stroop"
          element={<Menu title="Stroop" name="stroop" text={stroopText} />}
        />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
