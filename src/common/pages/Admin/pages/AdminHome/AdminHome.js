import React, { Component } from 'react';

export class AdminHome extends Component {

	componentDidMount() {
		// Fetch data
		// No need to optimize yet, always re-fetch when mounted
		this.props.fetchData();
	}

	render() {
		return (
			<div>
				DUMMY LAYOUT FOR AdminHome
			</div>
		);
	}
}

AdminHome.defaultProps = {
	fetchData: () => {

	},
};

export default AdminHome;
