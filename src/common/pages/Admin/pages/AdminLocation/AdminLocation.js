import React, { Component } from 'react';
import Table from 'common/components/Table';
import EnhancedTable from 'components/Table';
import { dateFormatter } from 'common/utility/formatters';

export class AdminLocation extends Component {

	constructor() {
		super();
		this.getColumns = this.getColumns.bind(this);
	}

	componentDidUpdate() {
		this.props.fetchData();
	}

	getColumns() {
		return [
			{
				id: 'vendor.name',
				label: 'Warehouse',
			},
			{
				id: 'aisle',
				label: 'Aisle',
			},
			{
				label: 'Rack',
				id: 'rack',
			},
			{
				label: 'Slab',
				id: 'slab',
			},
			{
				label: 'Bin',
				id: 'bin',
			},
		];
		// TODO: Pass in custom action renderer
	}

	render() {
		const {
			getData,
			data,
		} = this.props;
		return (
			<div>
			  <EnhancedTable
					getData={getData}
					data={data}
			    getColumns={this.getColumns}
			    hideFields={['id']}
			    tableTitle={"Location Master"}
			    fieldFormatters={{
			      created_at: dateFormatter,
			      updated_at: dateFormatter
			    }}
			    searchFields={['aisle', 'rack', 'slab', 'bin']}
			  />
			</div>
		);
	}
}

AdminLocation.defaultProps = {
	fetchData: () => {

	},
};


export default AdminLocation;
