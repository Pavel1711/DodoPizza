import React from 'react';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import DataMart from "./components/DataMart";


export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Navigation/>
        <DataMart slug="pizza"/>
        <DataMart slug="combo"/>
        <DataMart slug="snacks"/>
        <DataMart slug="desserts"/>
        <DataMart slug="drinks"/>
      </div>
    </div>
  );
}
