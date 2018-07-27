export const schema = {
	title: "Request Edit",
	description: "Edit Material Requests",
	type: "object",
	required: ["sales_order_id", "code", "status"],
	properties: {
		sales_order_id: {
			type: "string",
			title: "Sales ID",
		},
		code: {
			type: "string",
			title: "Code",
		},
		status: {
			type: "string",
			title: "Status",
		},
	}
};

export const uiSchema = {
	name: {
	},
	types: {
		"ui:options": {
	    addable: true,
	  },
	},
};

export const columns = [
	{
		id: "sales_order_id",
		label: "Sales ID"
	},
	{
		id: "code",
		label: "Order Code"
	},
	{
		id: "status",
		label: "Status"
	},
	{
		id: "delivery_date",
		label: "Delivery Date"
	},
	{
		id: "created_at",
		label: "Created",
	},
	{
		id: "type",
		label: "Order Type",
	},
];



export const searchFields = [
	{
		id: "request_no",
		label: "Request No"
	},
	{
		id: "type",
		label: "Product Type"
	},
	{
		id: "status",
		label: "Product Status"
	},
	{
		id: "created_on",
		label: "From Date"
	},
	{
		id: "delivery_date",
		label: "To Date"
	},
];

export const itemSchema = {
	'name': "Supplier Name",
	'status': "Supplier Status",
};
