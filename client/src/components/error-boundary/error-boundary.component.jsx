import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

// get any error that gets thrown in any of the children of this error boundary component
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error, errorInfo) {
    // process the error
    // return an obj and setting the state
    // this method allows us to catch any error which occurs inside of any children nested in errorboundary
    return { hasErrored: true, error, errorInfo };
  }

  // info: which component broke
  componentDidCatch(error, info) {
    // this.setState({
    //   hasErrored: true,
    //   error
    // })
    console.log(info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>Dude, this page is broken for now. Come back later.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// https://codepen.io/gaearon/pen/wqvxGa?editors=0010
// https://www.kapwing.com/404-illustrations?ref=producthunt
