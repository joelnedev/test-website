import { Component } from 'react';
import ReactDOM from 'react-dom';
import Troll from './components/Troll';
import Footer from './components/Footer';

class App extends Component {
	constructor(props: any) {
		super(props);
	}

	override render() {
		return (
			<Troll />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));