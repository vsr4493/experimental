import React, { Component } from "react";
import Table from "common/components/Table";
import EnhancedTable from "components/Table";
import { dateFormatter } from "common/utility/formatters";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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
			<Dialog
				fullScreen
        aria-labelledby="responsive-dialog-title"
				open={this.state.showEditForm}
				onClose={() => this.toggleEditForm({ visible: false })}
			>
				<DialogTitle id="responsive-dialog-title">{"Edit items"}</DialogTitle>
				<DialogContent>
					<Form
						uiSchema={config.uiSchema}
						schema={config.schema}
						data={this.state.form}
						onSubmit={this.updateItem}
					/>
        </DialogContent>
			</Dialog>
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
