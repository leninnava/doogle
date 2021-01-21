import { useEffect, useState } from "react";
import * as React from "react";
import wiki from "wikijs";
import "../styles.css";
import Search from "./Search";
import Home from "./Home";
import Content from "./Content";
import Loading from "./Loading";

const App = () => {
  const [dogBreedData, setDogBreedData] = useState([]);
  const [dogBreed, setDogBreed] = useState("");
  const [contentDataLoaded, setContentDataLoaded] = useState(false);
  const [contentLoadError, setContentLoadError] = useState(false);
  const [contentData, setContentData] = useState({});

  // Suggestion: make error handling a norm, not an exception.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const obj = await res.json();
        let objArray = obj;
        setDogBreedData([objArray.message]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  
  // load data function, it's called when you press go

  const loadContent = async (dogBreed) => {
    const wikiData = async () => {
      let wikiSummary;
      await wiki()
        .find(dogBreed)
        .then((page) => (wikiSummary = page.summary()));
      console.log(wikiSummary);
      return wikiSummary;
    };

    const dogPictures = async () => {
      const res = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
      const json = await res.json();
      // make an array of random images from the returned data array.
      const randomIndex = () => Math.round(Math.random() * json.message.length);
      const picturesArray = [
        json.message[randomIndex()],
        json.message[randomIndex()],
        json.message[randomIndex()],
        json.message[randomIndex()],
      ];
      return picturesArray;
    };

    const data = {
      dogBreed: dogBreed,
      dogInformation: wikiData(),
      dogPictures: dogPictures(),
    };

    setContentData(data);
    return setContentDataLoaded(true);
  };

  return (
    <div className="App">
      <Home>
        <Search dogBreedData={dogBreedData} />
      </Home>
    </div>
  );
};
export default App;
