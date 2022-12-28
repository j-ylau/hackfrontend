import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import SearchBar from "./components/SearchBar.js";
import Card from "./components/Card.js";
import QuickButtons from "./components/QuickButtons.js";

export default function Search() {
  return (
    <div>
      <Navbar />
      <div id="searchpage-container">
        <SearchBar />
        <QuickButtons />
        <div id="card-container">
          <div id='card-title-container'>
            Looking for: <b>Filter 1</b> and <b>Filter 2</b>
          </div>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
