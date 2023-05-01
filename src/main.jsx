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
    <Route path="/riga-crypto" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="/riga-crypto/exchanges" element={<Exchanges />} />
      <Route path="/riga-crypto/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/riga-crypto/crypto/:coinId" element={<CryptoDetails />} />
      <Route path="/riga-crypto/news" element={<News />} />
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