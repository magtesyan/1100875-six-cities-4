import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);
