import { Component } from 'react';
import Greeting from './Greeting';

interface Props {};

export default class Troll extends Component<Props, { value: string, name: string, submitted: boolean }> {
	constructor(props: Props) {
		super(props);

		this.state = {
			value: '',
			name: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: any) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event: any) {
		this.setState(state => ({ name: state.value, submitted: true }));
		event.preventDefault();
	}

	override render() {
		return (
			<div>
				<form style={{marginTop: '20px'}} className='text-center' onSubmit={this.handleSubmit}>
					<label className='text-2xl' >
						Your name: ​
						<input
							type='text'
							name='name'
							value={this.state.value}
							onChange={this.handleChange}
							className='bg-gray-700 text-center text-xl'
							style={{ marginBottom: '5px', padding: '2px', borderRadius: '5px' }}
						/>
					</label>
					<input
						type='submit'
						value='Submit'
						className='bg-gray-500 hover:bg-gray-600 text-center text-xl'
						style={{ marginLeft: '5px', padding: '2px', borderRadius: '5px' }}
					/>
				</form>
				<Greeting name={this.state.submitted ? this.state.name : ''} />
				{ this.state.submitted ? <img src="https://media.discordapp.net/attachments/831167697302716446/885934732347576360/swag-krabs-real.gif" alt='swag krabs real' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}} width={'25%'} /> : ''}
			</div>
		);
	}
}