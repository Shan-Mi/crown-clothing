import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

// children: text-content
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
export default CustomButton;
// it will always have custom-button this className, and optionally have .isGoogleSignIn
