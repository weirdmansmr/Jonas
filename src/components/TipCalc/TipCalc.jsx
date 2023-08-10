import React, { useState } from "react";
import Bill from "./Bill/Bill";
import PercentSelect from "./PercentSelect/PercentSelect";
import Output from "./Output/Output";
import Reset from "./Reset/Reset";

export const TipCalc = () => {
	const [bill, setBill] = useState(0);
	const [servU, setServU] = useState(0);
	const [servF, setServF] = useState(0);

	let tip = bill * ((servF + servU) / 2 / 100);

	return (
		<>
			<Bill bill={bill} setBill={setBill} />
			<PercentSelect serv={servU} setServ={setServU}>
				How did you like the service
			</PercentSelect>
			<PercentSelect serv={servF} setServ={setServF}>
				How did your friend like the service
			</PercentSelect>
			{bill > 0 && (
				<>
					<Output tip={tip} bill={bill} />
					<Reset setBill={setBill} setServF={setServF} setServU={setServU} />
				</>
			)}
		</>
	);
};
