import { Component } from "react";

export default class Footer extends Component {
	constructor(props: any) {
		super(props);
	}

	override render() {
		return (
			<p className='text-center align-text-bottom' style={{marginTop: '20px'}}><a className='text-blue-500 hover:text-blue-400' href='https://github.com/joelnedev/test-website/blob/main/LICENSE'>Copyright © 2021 Joel N. Evans</a></p>
		);
	}
}