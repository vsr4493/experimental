import React, { Component } from 'react';
import WrappedForm from 'common/components/Form/Form.js';

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
				<WrappedForm />
			</div>
		);
	}
}

AdminHome.defaultProps = {
	fetchData: () => {

	},
};

export default AdminHome;
