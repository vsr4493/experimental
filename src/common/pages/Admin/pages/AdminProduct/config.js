export const schema = {
	title: "Product Edit",
	description: "Edit Product Details",
	type: "object",
	required: ["onemg_sku_id", "sku_name", "manufacturer_name", "item_group"],
	properties: {
		onemg_sku_id: {
			type: "string",
			title: "Sku ID",
		},
		sku_name: {
			type: "string",
			title: "Sku Name",
		},
		manufacturer_name: {
			type: "string",
			title: "Manufacturer Name",
		},
		item_group: {
			type: "string",
			title: "Item Group",
		},
		uom: {
			type: "string",
			title: "Unit of Measurement",
		},
		pack_size: {
			type: "integer",
			title: "Pack Size"
		}
	}
};

export const uiSchema = {
};

export const columns = [
	{
		id: "onemg_sku_id",
		label: "Sku ID"
	},
	{
		id: "sku_name",
		label: "Sku Name"
	},
	{
		id: "manufacturer_name",
		label: "Manufacturer Name"
	},
	{
		id: "item_group",
		label: "Item Group"
	},
	{
		id: "uom",
		label: "Unit of Measurement"
	},
	{
		id: "pack_size",
		label: "Pack Size"
	},
	{
		id: "created_at",
		label: "Created"
	},
	{
		id: "updated_at",
		label: "Updated"
	}
];

export const searchFields = [
	{
		id: "onemg_sku_id",
		label: "Sku ID"
	},
	{
		id: "sku_name",
		label: "Sku Name"
	},
	{
		id: "item_group",
		label: "Item Group"
	},
	{
		id: "manufacturer_name",
		label: "Manufacturer Name"
	},

];

export const pageTitle = 'Product Master';
export const itemSchema = {
	"onemg_sku_id" : "Sku ID",
	"sku_name" : "Sku Name",
	"manufacturer_name" : "Manufacturer Name",
	'item_group' : "Item Group",
	"uom" : "Unit of Measurement",
	"pack_size" : "Pack Size",
	"created_at" : "Created",
	"updated_at" : "Updated"
};
