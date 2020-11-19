import React from "react";
import "./App.css";
import GiphyCard from "./components/GiphyCard";
import SearchNumGif from "./components/SearchNumGif";

function App() {
  return (
    <div className="App">
      <h1>Random GIFs</h1>
      <SearchNumGif />
      <GiphyCard />
    </div>
  );
}

export default App;
