import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  );
}

export default App;
