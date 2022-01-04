import "./App.css";
import React from "react";
import FormComp from "./components/FormComp";
import FormCompEn from "./components/FormCompEn";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/en" component={FormCompEn}></Route>
        <Route path="/" component={FormComp}></Route>
      </Switch>
    </div>
  );
}

export default App;
