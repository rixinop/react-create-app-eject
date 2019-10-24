import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./styles/common.scss";

// ReactDOM.render(<Router />, document.getElementById("root"));

(Component => {
    ReactDOM.render(
        <BrowserRouter basename="/mbox">
            <Component />
        </BrowserRouter>,
        document.getElementById("root")
    );
})(Router);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();/