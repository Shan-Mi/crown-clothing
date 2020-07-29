import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    // width: 23%;
    flex-basis: 23%;

    &:last-child {
      // width: 8%;
      flex-basis: 8%;
    }
  }
`;

export const CheckoutTotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
