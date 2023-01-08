import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import SearchBar from "./components/SearchBar.js";
import Card from "./components/Card.js";
import QuickButtons from "./components/QuickButtons.js";
import data from "./data/sites";

export default function Search() {
  const query = useLocation().state?.q;
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter(item => !query || item.tags[query]);
  return (
    <div>
      <Navbar />
      <div id="searchpage-container">
        <SearchBar />
        <QuickButtons />
        <div id="card-container">
          <div id="card-title-container">
            Looking for:{' '}
            {query ? (
              <>
                <b>{query}</b>
              </>
            ) : (
              <b>All</b>
            )}
          </div>
          {filteredData.map(item => (
            <Card
              picurl={item.picurl}
              title={item.title}
              desc={item.desc}
              url={item.url}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
