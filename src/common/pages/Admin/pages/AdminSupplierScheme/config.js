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
		id: "scheme.name",
		label: " Scheme Name"
	},
	{
		id: "supplier.name",
		label: " Supplier Name"
	},
	{
		id: "sku.sku_name",
		label: " Sku Name"
	},
	{
		id: "scheme.min_amount",
		label: "Min Amount Percentage"
	},
	{
		id: "scheme.discount_units",
		label: "Discount Percentage"
	},
	{
		id: "created_at",
		label: "Created At"
	},
	// {
	// 	id: "expires_at",
	// 	label: "Expires At"
	// },
];

export const searchFields = [
	{
		id: "scheme_name",
		label: "Scheme Name"
	},
	{
		id: "supplier_name",
		label: "Supplier Name"
	},
	{
		id: "sku_name",
		label: "Sku Name"
	},

];

export const itemSchema = {
	'name': "Supplier Name",
	'status': "Supplier Status",
};

export const pageTitle = 'Supplier Scheme Master';