import React, { useState } from "react";
import "./accorditem.scss";

const AccordItem = ({ title, text, id }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`item ${isOpen ? `open` : ``}`}
			onClick={() => setIsOpen((isOpen) => !isOpen)}
		>
			<p className="number">{id < 9 ? `0${id + 1}` : `${id + 1}`}</p>
			<h2 className="title">{title}</h2>
			<p className="icon"> {isOpen ? `-` : `+`} </p>
			{isOpen && <p className="content-box">{text}</p>}
		</div>
	);
};

export default AccordItem;
