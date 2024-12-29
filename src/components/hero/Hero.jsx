import React, { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: false,
      data: null,
    };
    // this.handleReset = this.handleReset.bind(this);
  }
  handleClick(p) {
    alert("class comp " + p);
  }
  handleReset(p) {
    this.setState({ count: (p = 0) });
  }
  handleDecrement(p) {
    this.setState({ count: p - 1 });
  }
  handleShow(p) {
    this.setState({ show: (p = !p) });
  }
  // componentDidMount() {
  //   alert("componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  render() {
    return (
      <div>
        <h2>
          Hero {this.props.title} {this.state.count}
        </h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        {this.state.count > 0 ? (
          <>
            <button onClick={() => this.handleReset(this.state.count)}>
              Reset
            </button>
            {/* <button onClick={() => this.handleReset()}>Reset2</button> */}
          </>
        ) : (
          <></>
        )}
        <button
          disabled={this.state.count <= 0}
          onClick={() => this.handleDecrement(this.state.count)}
        >
          Decrement
        </button>
        <button onClick={() => this.handleClick(5)}>Click</button>
        <br />
        <button onClick={() => this.handleShow(this.state.show)}>
          {!this.state.show ? `Show More` : `Show Less`}
        </button>
        {this.state.show && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            possimus. Quas iusto optio fugit porro natus excepturi numquam
            corporis? Ad commodi consequatur impedit aperiam aut similique nisi
            hic optio incidunt.
          </p>
        )}
      </div>
    );
  }
}
