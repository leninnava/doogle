import React from "react";

const LoadScreen = () => {
  return (
    <React.Fragment>
      <h2>loading screen.</h2>
    </React.Fragment>
  );
};

const LoadError = () => {
  return (
    <React.Fragment>
      <h2>your error message is here</h2>
      <button>go back</button>
      <button>retry</button>
    </React.Fragment>
  );
};

const Loading = (props) => {
  return (
    <React.Fragment>
      {props.contentLoadError ? <LoadError /> : <LoadScreen />}
    </React.Fragment>
  );
};

export default Loading;
