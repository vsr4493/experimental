import React, { Component } from 'react';

export class AdminLocation extends Component {

	componentDidMount() {
		// Fetch data
		// No need to optimize yet, always re-fetch when mounted
		this.props.fetchData();
	}

	render() {
		return (
			<div>
				DUMMY LAYOUT FOR AdminLocation
			</div>
		);
	}
}

AdminLocation.defaultProps = {
	fetchData: () => {

	},
};


export default AdminLocation;