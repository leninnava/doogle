import React from "react";
import Search from "./Search";
const Home = (props) => {
  return (
    <React.Fragment>
      <h1>Doogle.</h1>
      <h2>Dog breed information and lots of dog pictures. Nothing more. </h2>
      <Search
        dogBreedList={props.dogBreedList}
        dogBreed={props.dogBreed}
        setDogBreed={props.setDogBreed}
      />
      <button onClick={props.goToContent}>go (woof)</button>
    </React.Fragment>
  );
};

export default Home;
