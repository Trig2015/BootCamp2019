import React from 'react';

class Maliste extends React.Component {
	render() {
		const numbers = this.props.numbers || [];
		const data = numbers.map(n => <li key={n}>{`Element ${n}`} </li>);
		return (
			<>
				<h2> {this.props.titre} </h2>
				<ul>{data}</ul>
			</>
		);
	}
}
export default Maliste;
