import React from "react";

import "./custom-button.styles.scss";

// children: text-content
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}  ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}>
    {children}
  </button>
);
export default CustomButton;
// it will always have custom-button this className, and optionally have .isGoogleSignIn
