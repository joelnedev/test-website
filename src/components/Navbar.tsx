import { Link, RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps {}
const Navbar = ({ match, history, location }: Props) => {
	console.log(match);
	console.log(history);
	console.log(location);
	return (
		<div>
			<Link to="/page1">Page 1</Link>
			<Link to="/page2">Page 2</Link>
			{/* <Title label="Hello World!" /> */}
		</div>
	);
};

export default Navbar;