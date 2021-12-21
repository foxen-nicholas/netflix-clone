import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row title="Animated" fetchURL={requests.fetchAnimatedMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documantaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;