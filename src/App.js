import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          <a
            href="https://github.com/SU06FIALHO/weather-react-app"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open-source
          </a>{" "}
          code available, made by
          <a
            href="https://github.com/SU06FIALHO?tab=repositories"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Susana Fialho{" "}
          </a>
          and hosted at
          <a
            href="https://app.netlify.com/teams/su06fialho/sites"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify.{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

