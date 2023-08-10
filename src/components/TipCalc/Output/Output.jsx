import React from "react";

const Output = ({ tip, bill }) => {
  return <h2>You pay {tip + bill} (${bill} + ${tip} tip)</h2>;
};

export default Output;
