interface Props { name: string };
export default ({name}: Props) => (
	<div style={{marginTop: '20px'}} >
		<h1 className='text-center text-4xl' >Hi{name !== '' ? `, ${name}! I know your address.` : '!'}</h1>
	</div>
);