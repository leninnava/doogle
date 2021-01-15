import React, { useEffect, useState } from "react";
import wiki from "wikijs";
import "../styles.css";
import Home from "./Home";
import Content from "./Content";
import Loading from "./Loading";

function App() {
  const [dogBreedList, setDogBreedList] = useState([]);
  const [dogBreed, setDogBreed] = useState("");
  const [appView, setAppView] = useState("home");
  const [contentDataLoaded, setContentDataLoaded] = useState(false);
  const [contentLoadError, setContentLoadError] = useState(false);
  const [contentData, setContentData] = useState({});

  // Suggestion: make error handling a norm, not an exception.

  useEffect(async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const obj = await res.json();
      let objArray = obj;

      setDogBreedList([objArray.message]);
    } catch (error) {
      console.log(error);
    }
    /// replace

    // to do, flat the sub-breeds into the array. Example: there are several bulldog breeds.
  }, []);
  // load data function, it's called when you press go
  console.log(dogBreedList);
  const loadContent = async (dogBreed) => {
    const wikiData = async () => {
      try {
        let wikiSummary;
        await wiki()
          .find(dogBreed)
          .then((page) => (wikiSummary = page.summary()));
        console.log(wikiSummary);
        await wiki()
          .pagesInCategory("Dogs") // this doesn't work for some reason, google or ask for help
          .then((list) => console.log(list));

        /// this is not working.
        return wikiSummary;
      } catch (error) {
        console.log(setContentLoadError);
        setContentLoadError(true);
      }
    };

    const dogPictures = async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
        const json = await res.json();
        // make an array of random images from the returned data array.
        const randomIndex = () =>
          Math.round(Math.random() * json.message.length);
        const picturesArray = [
          json.message[randomIndex()],
          json.message[randomIndex()],
          json.message[randomIndex()],
          json.message[randomIndex()],
        ];
        return picturesArray;
      } catch (error) {
        setContentLoadError(true);
      }
    };

    const contentData = {
      dogBreed: dogBreed,
      dogInformation: await wikiData(),
      dogPictures: await dogPictures(),
    };
    setContentData(contentData);
    return setContentDataLoaded(true);
  };

  // App view switch event handlers

  const goToContent = () => {
    loadContent(dogBreed);
    setAppView("content");
  };
  const goToHome = () => {
    setContentData({});
    setContentDataLoaded(false);
    setAppView("home");
  };

  return (
    <div className="App">
      {appView == "home" ? (
        <Home
          dogBreedList={dogBreedList}
          dogBreed={dogBreed}
          setDogBreed={setDogBreed}
          goToContent={goToContent}
        />
      ) : appView == "content" && !contentDataLoaded ? (
        <Loading contentLoadError={contentLoadError} />
      ) : appView == "content" && contentDataLoaded ? (
        <Content contentData={contentData} goToHome={goToHome} /> // ideally, pass all your loaded data into this component as props.
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
