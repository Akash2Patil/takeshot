import React, { useEffect } from "react";
import Navbar from "./component/global/Navbar";
import WebcamCapture from "./component/WebcamCapture";
import useStore from "./store/useStore";

const App: React.FC = () => {
    const { theme } = useStore();

   useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      {/* <WebcamCapture /> */}
    </>
  );
};

export default App;
