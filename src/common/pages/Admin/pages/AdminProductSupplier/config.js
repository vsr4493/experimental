export const schema = {
	title: "Supplier Edit",
	description: "Edit Supplier Details",
	type: "object",
	required: ["supplier_sku_id"],
	properties: {
		supplier_sku_id: {
			type: "string",
			title: "Supplier Sku ID",
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
		id: "supplier_sku_id",
		label: "Supplier Sku ID"
	},
	{
		id: "sku.sku_name",
		label: "Sku Name"
	},
	{
		id: "supplier.name",
		label: "Supplier Name"
	},
	{
		id: "created_at",
		label: "Created"
	},
	{
		id: "updated_at",
		label: "Updated"
	},
];

export const searchFields = [
	{
		id: "supplier_sku_id",
		label: "Supplier Sku ID"
	},
	{
		id: "sku_name",
		label: "Sku Name"
	},
	{
		id: "supplier_name",
		label: "Supplier Name"
	},
];

export const itemSchema = {
	'supplier_sku_id': "Supplier Sku ID",
};

export const pageTitle = 'Product Supplier Master';