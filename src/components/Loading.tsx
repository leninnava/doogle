import * as React from "react";

const LoadScreen = () => {
  return (
    <>
      <h2>loading screen.</h2>
    </>
  );
};

const LoadError = () => {
  return (
    <>
      <h2>your error message is here</h2>
      <button>go back</button>
      <button>retry</button>
    </>
  );
};

const Loading = (props) => {
  return <>{props.contentLoadError ? <LoadError /> : <LoadScreen />}</>;
};

export default Loading;
