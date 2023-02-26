import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css"


import axios from "axios";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://185.217.131.88:8080/admin/"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <ToastContainer />
  </Router>
);
