import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import SearchBarHome from './components/SearchBarHome.js'
import { Container, Row, Col } from "shards-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home-container">
        <div>
          <div id="home-header">
            <h1>HackFrontend.</h1>
            <h3>Tips and Tricks to Frontend Developement</h3>
          </div>

          <div id="home-content">
            <h1>Search for frontend tools</h1>
            <SearchBarHome/>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}
