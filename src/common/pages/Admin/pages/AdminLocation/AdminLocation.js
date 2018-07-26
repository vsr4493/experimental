import React, { Component } from 'react';
import Navbar from '../../../../component/Navbar/Navbar';
import Breadcrumbs from '../../../../component/Breadcrumbs/Breadcrumbs';

export class AdminLocation extends Component {

	componentDidMount() {
		// Fetch data
		// No need to optimize yet, always re-fetch when mounted
		this.props.fetchData();
	}

	render() {
		return (
			<div>
				<Navbar />
				<Breadcrumbs breadcrumbsLink="Home > Product" />
				SelectedTitle<br />
				SearchBar<br />
				Table<br />
				Footer<br />

			</div>
		);
	}
}

AdminLocation.defaultProps = {
	fetchData: () => {

	},
};


export default AdminLocation;