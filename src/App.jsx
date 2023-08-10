import "./style.scss";
import DataCounter from "./components/DataCounter/DataCounter";
import Accordion from "./components/Accordion/Accordion";

function App() {
	return (
		<div className="df">
			<DataCounter />
			<Accordion />
		</div>
	);
}

export default App;
