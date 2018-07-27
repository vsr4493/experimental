import React, { Component } from "react";
import Table from "common/components/Table";
import EnhancedTable from "components/Table";
import { dateFormatter } from "common/utility/formatters";
import { withTheme, MuiThemeProvider, createMuiTheme  } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Form from 'components/Form';

const theme = createMuiTheme({
	overrides: {
		MuiPaper: {
			root: {
				display: 'inline-block',
			}
		}
	}
})

export class Base extends Component {
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
		this.props.updateItem(formData).then(() => {
			this.toggleEditForm({visible: false});
		});
	}

	renderFormModal() {
		const { config } = this.props;
		return (
			<MuiThemeProvider theme={theme}>
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
			</MuiThemeProvider>
		);
	}

	render() {
		const { getData, data, meta, options, config } = this.props;
		return (
			<div>
				{this.renderFormModal()}
				<EnhancedTable
					getData={getData}
					data={data}
					meta={meta}
					tableTitle={config.pageTitle}
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

Base.defaultProps = {
	getData: () => {},
	options: {},
	config: {},
};

export default withTheme(theme)(Base);
