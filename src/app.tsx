import React from 'react';
import ReactDOM from 'react-dom';

export const Greeting = (props: { name: string }) => (
	<div>
		<h1>Hi{props.name !== '' ? `, ${props.name}! I know your address.` : '!'}</h1>
	</div>
);

class App extends React.Component<{}, { value: string, name: string, submitted: boolean }> {
	constructor(props: {}) {
		super(props);

		this.state = {
			value: '',
			name: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: React.FormEvent<HTMLInputElement>) { // @ts-expect-error
		this.setState({ value: event.target.value });
	}

	handleSubmit(event: any) {
		this.setState(state => ({ name: state.value, submitted: true }));
		event.preventDefault();
	}

	override render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Your name: ​
						<input
							type="text"
							name="name"
							value={this.state.value}
							onChange={this.handleChange}
							className="bg-gray-700"
						/>
					</label>
					<input
						type="submit"
						value="Submit"
						className="bg-gray-500 hover:bg-gray-600"
					/>
				</form>
				<Greeting name={this.state.submitted ? this.state.name : ''} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));