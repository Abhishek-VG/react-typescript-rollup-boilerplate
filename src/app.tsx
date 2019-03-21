import React from "react";
import "./style.css";

interface IProps {
  name: string
}
export default class App extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <div className="container">Hello {this.props.name}</div>
      </React.Fragment>
    );
  }
}
