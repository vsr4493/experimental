export const schema = {
	title: "Supplier Edit",
	description: "Edit Supplier Details",
	type: "object",
	required: ["name", "type"],
	properties: {
		name: {
			type: "string",
			title: "SKU",
		},
		uom: {
			type: "string",
			title: "UOM",
		},
		quantity: {
			type: "string",
			title: "Quantity",
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
		label: "Sales #"
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
		id: "created_on",
		label: "Created On",
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