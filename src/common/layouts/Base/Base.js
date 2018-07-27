import React, { Component } from "react";
import Table from "common/components/Table";
import EnhancedTable from "components/Table";
import { dateFormatter } from "common/utility/formatters";
import { withTheme, MuiThemeProvider, createMuiTheme  } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import DetailedView from 'components/DetailedView';
import Form from 'components/Form';

const theme = createMuiTheme({
	overrides: {
		MuiPaper: {
			root: {
				display: 'inline-block',
				marginTop: '10%',
				marginLeft: '35%'
			}
		}
	}
})

export class Base extends Component {
	constructor() {
		super();
		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.getDetailsRoute = this.getDetailsRoute.bind(this);
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

	getDetailsRoute(activeItem) {
		const {
			match,
		} = this.props;
		return `${match.url}/${activeItem.id}`;
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
		const { getData, data, baseData, meta, allowsAdd, options, config, match } = this.props;
		if(
			data.length > 0 &&
			match.params &&
			match.params.itemID &&
			match.params.itemID.length > 0
		) {
			return (
				<DetailedView
					data={baseData[match.params.itemID]}
					config={config.itemSchema}
				/>
			);
		}
		return (
			<div>
				{this.renderFormModal()}
				<EnhancedTable
					getData={getData}
					data={data}
					meta={meta}
					allowsAdd={allowsAdd}
					tableTitle={config.pageTitle}
					fieldFormatters={{
						created_at: dateFormatter,
						updated_at: dateFormatter
					}}
					columns={config.columns}
					searchFields={config.searchFields}
					showEditor={config.schema ? this.toggleEditForm : undefined}
					getDetailsRoute={config.itemSchema ? this.getDetailsRoute : undefined}
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
