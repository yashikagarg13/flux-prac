import React from "react";
import AppActions from "../action/app-actions";

export default class App extends React.Component {
  render () {
    return (
      <h1 onClick={AppActions.addItem.bind(null, "This is the item")}>Hello World</h1>
    );
  }
}