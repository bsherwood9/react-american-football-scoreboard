//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeSix = () => {
    setHomeScore(homeScore + 7);
  };
  const homeGoal = () => {
    setHomeScore(homeScore + 3);
  };
  const awaySix = () => {
    setAwayScore(awayScore + 7);
  };
  const awayGoal = () => {
    setAwayScore(awayScore + 3);
  };
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeSix}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={homeGoal}>
            Home Field Goal
          </button>
          <button
            className="homeButtons__reset"
            onClick={() => {
              setHomeScore(0);
            }}
          >
            Home Reset Score
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awaySix}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={awayGoal}>
            Away Field Goal
          </button>
          <button
            className="awayButtons__reset"
            onClick={() => {
              setAwayScore(0);
            }}
          >
            Away Reset Score
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
