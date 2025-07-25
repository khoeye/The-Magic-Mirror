import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardSearch from "./components/cardSearch/cardSearch";
import HomePage from "./components/home/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardTemplate from "./components/cardTemplate/cardTemplate";
import store from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cardsearch",
    element: <CardSearch />,
  },
  {
    path: `/template`,
    element: <CardTemplate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
