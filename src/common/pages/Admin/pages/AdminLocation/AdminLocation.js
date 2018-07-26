import React, { Component } from 'react';
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
				<Breadcrumbs breadcrumbsLink="Home > Product" />
				SelectedTitle<br />
				SearchBar<br />
				Table<br />
				Footer<br />
				Is it here?
			</div>
		);
	}
}

AdminLocation.defaultProps = {
	fetchData: () => {

	},
};


export default AdminLocation;
