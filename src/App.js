//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [second, setSecond] = useState(9);
  const [tens, setTens] = useState(5);
  const [mins, setMins] = useState(9);
  const [down, setDown] = useState(1);
  const newDown = () => {
    if (down < 4 || down === 1) {
      setDown(down + 1);
    } else {
      setDown(1);
    }
  };
  const newQuart = () => {
    if (quarter < 4 || quarter === 1) {
      setQuarter(quarter + 1);
    } else {
      setQuarter(1);
    }
  };
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
  useEffect(() => {
    setTimeout(() => {
      mins <= 9 && mins >= 0 && second >= 1 && second <= 9
        ? setSecond(second - 1)
        : setSecond(9);
    }, 1000);
    setTimeout(() => {
      tens <= 5 && tens >= 1 ? setTens(tens - 1) : setTens(5);
    }, 10000);
    setTimeout(() => {
      mins <= 9 && mins >= 1 ? setMins(mins - 1) : setMins(0);
    }, 60000);
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">
            0{mins}:{tens}
            {second}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} />
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

          <button className="quarter__button" onClick={newDown}>
            Downs Count
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

          <button className="quarter__button" onClick={newQuart}>
            New Quarter
          </button>
          <h1>
            Yardage
            <br></br>
            <button>+</button>
            <button>-</button>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
