import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return <h1 style={{ color: "red" }}>something went wrong</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
