import * as React from "react";

const Home = (props) => {
  return (
    <>
      <h1>Doogle.</h1>
      <h2>Dog breed information and lots of dog pictures. Nothing more. </h2>
      {props.children}
      <button onClick={props.goToContent}>go (woof)</button>
    </>
  );
};

export default Home;
