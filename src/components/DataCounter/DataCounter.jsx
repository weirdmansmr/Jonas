import { useState } from "react";
import React from "react";

const DataCounter = () => {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date("july 21 2023");
	date.setDate(date.getDate() + count);

	const inputReset = () => {
		setStep(1);
		setCount(0);
	};

	return (
		<>
			<div className="step">
				<input
					type="range"
					value={step}
					min={1}
					max={10}
					onChange={(s) => setStep(+s.target.value)}
				/>
				<span>{step}</span>
			</div>
			<div className="count">
				<button type="button" onClick={() => setCount((s) => s - step)}>
					-
				</button>
				<input
					type="text"
					value={count}
					onChange={(c) => setCount(+c.target.value)}
				/>
				<button type="button" onClick={() => setCount((s) => s + step)}>
					+
				</button>
			</div>
			<div className="time">
				<p>
					{count < 0
						? `${count} days ago was `
						: count > 0
						? `${count} days from today is `
						: `Today is `}
					Time: {date.toDateString()}
				</p>
			</div>
			<button onClick={inputReset}>Reset</button>
		</>
	);
};

export default DataCounter;
