import React from 'react';
import { array } from 'utils/es6/input';
import Maliste from './liste';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, value: '', delected: '' };
	}
	render() {
		const nombres =
			this.state.count > 0
				? new array(this.state.count).fill(0).map((_, i) => i)
				: [];
		return (
			<>
				<select />
				<button
					onClick={e => {
						this.setState({ count: this.state.count + 1 });
					}}
				></button>
                </>
                <div>{`Vous avez cliqué ${this.state.count}  fois`}</div>
                <Maliste titre={this.state.value} numbers={nombres} />
			</>
		);
	}
}

export default App;
/*

hello
*/