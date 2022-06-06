import { Component } from "react"

export default class HomePage extends Component {
	constructor(props: any) {
		super(props);
	}
	
	override render() {
		return (
			<div>
				<h1>Welcome to Literally Nothing™!</h1>
				<p>This is a WIP remake of my current website, <a href="https://joelne.tech">joelne.tech</a>.</p>
			</div>
		);
	}
};