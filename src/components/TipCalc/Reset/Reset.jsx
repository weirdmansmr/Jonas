import React from "react";

const Reset = ({ setBill, setServF, setServU }) => {
  const handleReset = () => {
    setBill(0)
    setServF(0)
    setServU(0)
  }

	return (
		<button type="button" onClick={handleReset}>
			Reset All
		</button>
	);
};

export default Reset;
