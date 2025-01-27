import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          <a
            href="https://github.com/SU06FIALHO/weather-react-app"
            target="blank"
          >
            {" "}
            Open-source
          </a>{" "}
          code available, made by
          <a
            href="https://github.com/SU06FIALHO?tab=repositories"
            target="blank"
          >
            {" "}
            Susana Fialho{" "}
          </a>
          and hosted at
          <a
            href="https://app.netlify.com/teams/su06fialho/sites"
            target="blank"
          >
            {" "}
            Netlify.{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

