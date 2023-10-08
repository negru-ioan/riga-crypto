import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";

import App from "./App";
import store from "./app/store";

import "antd/dist/antd.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/crypto/:coinId" element={<CryptoDetails />} />
      <Route path="/news" element={<News />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);