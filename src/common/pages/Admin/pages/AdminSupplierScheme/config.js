export const schema = {
	title: "Supplier Edit",
	description: "Edit Supplier Details",
	type: "object",
	required: ["name", "type"],
	properties: {
		name: {
			type: "string",
			title: "Supplier Name",
		},
		types: {
			type: "array",
			title: "Supplier Type",
			items: {
				type: "string",
				default: "",
			},
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
		id: "status",
		label: "Status"
	},
	{
		id: "schemable_type",
		label: "Scheme Type"
	},
	{
		id: "name",
		label: "Name"
	},
	{
		id: "min_amount",
		label: "Minimum Amount Percentage"
	},
	{
		id: "discount_units",
		label: "Discount Percentage"
	},
	{
		id: "created_at",
		label: "Created At"
	},
	{
		id: "expires_at",
		label: "Expires At"
	},
];

export const searchFields = [
	{
		id: "name",
		label: "Supplier Name"
	},
	{
		id: "status",
		label: "Status"
	},
	{
		id: "schemable_type",
		label: "Scheme Type"
	},
];

export const itemSchema = {
	'name': "Supplier Name",
	'status': "Supplier Status",
};

export const pageTitle = 'Supplier Scheme Master';