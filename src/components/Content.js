import React from "react";
import { render } from "react-dom";

const Content = (props) => {
  return (
    <React.Fragment>
      <h1>Here goes your content.</h1>
      <h2>{props.contentData.dogBreed}</h2>
      <p>{props.contentData.dogInformation}</p>
      {props.contentData.dogPictures.map((image, i) => (
        <img src={image} key={i} />
      ))}
      <button onClick={props.goToHome}>take me home</button>
    </React.Fragment>
  );
};

export default Content;
