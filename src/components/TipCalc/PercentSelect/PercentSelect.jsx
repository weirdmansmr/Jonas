import React from "react";

const PercentSelect = ({ serv, setServ, children }) => {
	return (
		<div>
			<label htmlFor="servU">{children}</label>
			<select
				name="servU"
				id="servU"
				value={serv}
				onChange={(sU) => setServ(+sU.target.value)}
			>
				<option value="0">Diss (0%)</option>
				<option value="5">OK (5%)</option>
				<option value="10">Good (10%)</option>
				<option value="20">Great (20%)</option>
			</select>
		</div>
	);
};

export default PercentSelect;
