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
		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.state = {
			showEditForm: false,
			form: null
		};
	}

	toggleEditForm({ visible, activeItem }) {
		const showEditForm =
			typeof visible === "boolean" ? visible : !this.state.showEditForm;
		this.setState({
			showEditForm,
			form: showEditForm ? activeItem : null
		});
	}

	updateItem({ formData }) {
		this.props.updateItem(formData);
	}

	renderFormModal() {
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.showEditForm}
				onClose={() => this.toggleEditForm({ visible: false })}
			>
				<Form 
					uiSchema={config.uiSchema}
					schema={config.schema}
					data={this.state.form}
					onSubmit={this.updateItem}
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
