import React, { useEffect, useState } from "react";
import "../styles.css";
import Home from "./Home";
import Search from "./Search";

function App() {
  const [dogBreedList, setDogBreedList] = useState([]);
  const [dogBreed, setDogBreed] = useState("");

  useEffect(async () => {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const obj = await res.json();
    setDogBreedList(Object.keys(obj.message));
  }, []);

  const searchWiki = (dogBreed) => {
    wiki()
      .find(dogBreed)
      .then((page) => page.summary())
      .then();
    // Todos: make search more precise
  };

  return (
    <div className="App">
      <Home
        dogBreedList={dogBreedList}
        dogBreed={dogBreed}
        setDogBreed={setDogBreed}
        //to do: properly structure your app here and add context to solve the prop drilling problem.
      />
    </div>
  );
}

export default App;
