import React from "react";
import { Provider } from "react-redux";
import StartingTeam from "./components/StartingTeam";
import Players from "./components/Players";
import store from "./store";
import "./styles/styles.scss"

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Football Manager</h1>
        <Players />
        <StartingTeam />
      </main>
    </Provider>
  )
};

export default App;
