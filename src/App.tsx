import React from "react";
import Navbar from "./component/global/Navbar";
import WebcamCapture from "./component/WebcamCapture";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <WebcamCapture />
    </>
  );
};

export default App;
