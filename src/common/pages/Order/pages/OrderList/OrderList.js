import React, { Component } from "react";
import Table from "common/components/Table";
import EnhancedTable from "components/Table";
import { dateFormatter } from "common/utility/formatters";
import Modal from "@material-ui/core/Modal";
import Form from 'components/Form';
import Button from "@material-ui/core/Button";
import ViewList from "@material-ui/icons/ViewList";
import { Link } from 'react-router-dom';
import PickListView from './PickListView';

export class OrderList extends Component {
	constructor() {
		super();
		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.getDetailsRoute = this.getDetailsRoute.bind(this);
		this.renderPicklist = this.renderPicklist.bind(this);
		this.state = {
			showEditForm: false,
			form: null,
			isFetching: false,
			picklistDetails: null,
		};
		// Add history observer to reset state
	}

	componentDidMount() {
		this.props.history.listen((location, action) => {
		  if(action === 'POP') {
		  	this.setState({
		  		picklistDetails: null,
		  	});
		  }
		});
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

	renderPicklist(item, col) {
		return (
			<Link style={{ textDecoration: 'none' }} to={this.getDetailsRoute(item)}>
			  <Button
			    variant="fab"
			    mini
			    color="primary"
			  >
			    <ViewList/>
			  </Button>
			</Link>
		);
	}

	validatePathParams(match) {
		return match.params &&
			match.params.itemID &&
			match.params.itemID.length > 0;
	}

	render() {
		const { getData, data, baseData, meta, options, config, match } = this.props;
		if(this.validatePathParams(match) && this.state.picklistDetails) {
			return (
				<PickListView
					data={this.state.picklistDetails}
				/>
			);
		} else if(this.validatePathParams(match) && !this.state.isFetching) {
			this.setState({
				isFetching: true,
			});
			this.props.getItem(match.params.itemID).then((data) => {
				this.setState({
					picklistDetails: data,
					isFetching: false,
				});
			});
		}

		return (
			<div>
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
					//columns={config.columns.concat(additionalColumns)}
					searchFields={config.searchFields}
					showEditor={config.schema ? this.toggleEditForm : undefined}
					getDetailsRoute={this.getDetailsRoute}
				/>
			</div>
		);
	}
}

OrderList.defaultProps = {
	getData: () => {},
	options: {},
	config: {},
};

export default OrderList;
