import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0 };
  }

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 50);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  tick = () => {
    this.setState({ elapsed: new Date() - this.props.start });
  };

  render = () => {
    var elapsed = Math.round(this.state.elapsed / 100);

    var seconds = (elapsed / 10).toFixed(0);

    return (
      <p>
        Time in Match <b>{seconds} seconds</b>
      </p>
    );
  };
}

export default Loading;
