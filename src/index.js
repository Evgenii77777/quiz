import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import { Header } from "./components/header";
import { MainPage } from "./pages/main-page";
import { QuestionsPage } from "./pages/questions-page";
import { Container } from "./components/container";
import { store } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/question/:questionId" element={<QuestionsPage />} />
          </Routes>
        </Container>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
