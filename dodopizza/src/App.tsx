import React from 'react';
import Navigation from "./components/Navigation";
import Header from "./components/Header";


export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Navigation/>
      </div>
    </div>
  );
}
