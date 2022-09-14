import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import MyEROADApp from "@myeroad/myeroad-portal/src/App";
import PhoenixApp from "@phoenix/tracking/src/App";
// import JsApp from "@myeroad/js-app/src/App";

const OnRamp = () => {
  return (
    <>
      <MyEROADApp />
      <PhoenixApp />
      {/* <JsApp /> */}
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <OnRamp />
  </StrictMode>
);

export default OnRamp;
