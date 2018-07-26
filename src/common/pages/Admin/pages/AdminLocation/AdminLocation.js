import React, { Component } from "react";
import Table from "common/components/Table";
import EnhancedTable from "components/Table";
import { dateFormatter } from "common/utility/formatters";
//TEMP
import Modal from "@material-ui/core/Modal";
import Form from 'components/Form';
import * as config from './config';

export class AdminLocation extends Component {
	constructor() {
		super();
		this.getColumns = this.getColumns.bind(this);
		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.state = {
			showEditForm: false,
			form: null
		};
	}

	toggleEditForm({ visible, activeItem }) {
		debugger;
		const showEditForm =
			typeof visible === "boolean" ? visible : !this.state.showEditForm;
		this.setState({
			showEditForm,
			form: showEditForm ? activeItem : null
		});
	}

	getColumns() {
		return [
			{
				id: "vendor.name",
				label: "Warehouse"
			},
			{
				id: "aisle",
				label: "Aisle"
			},
			{
				label: "Rack",
				id: "rack"
			},
			{
				label: "Slab",
				id: "slab"
			},
			{
				label: "Bin",
				id: "bin"
			}
		];
		// TODO: Pass in custom action renderer
	}

	getSearchFields() { return config.searchFields; }

	renderFormModal() {
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.showEditForm}
				onClose={() => this.toggleEditForm({ visible: false })}
			>
				<Form 

				/>
			</Modal>
		);
	}

	render() {
		const { getData, data } = this.props;
		return (
			<div>
				{this.renderFormModal()}
				<EnhancedTable
					getData={getData}
					data={data}
					hideFields={["id"]}
					tableTitle={"Location Master"}
					fieldFormatters={{
						created_at: dateFormatter,
						updated_at: dateFormatter
					}}
					columns={config.columns}
					searchFields={config.searchFields}
					onEdit={this.toggleEditForm}
				/>
			</div>
		);
	}
}

AdminLocation.defaultProps = {
	fetchData: () => {}
};

export default AdminLocation;
