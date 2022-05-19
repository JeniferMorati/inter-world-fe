import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import 'antd/dist/antd.css';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// App
import AppRouter from "./routes";

// context
import { AppProvider } from "./context";

// componentes
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppProvider>
        <BrowserRouter>
          <Navigation />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
