import React from "react";

const Bill = ({bill, setBill}) => {
	return (
		<div>
			<label htmlFor="bill">How much was the bill?</label>
			<input
				id="bill"
				type="text"
				value={bill}
				onChange={(b) => setBill(+b.target.value)}
			/>
		</div>
	);
};

export default Bill;
