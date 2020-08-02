import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

// spinner is going to be a presentational component
const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
