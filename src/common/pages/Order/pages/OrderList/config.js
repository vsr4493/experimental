export const columns = [
	{
		id: "order_reference_id",
		label: "Order #",
	},
	{
		id: "customer_name",
		label: "Customer Name"
	},
	{
		id: "status",
		label: "Status",
	},
	{
		id: "created_at",
		label: "Created On",
		type: 'date',
	},
	{
		id: "updated_at", // Fix this
		label: "Delivery Date",
		type: 'date',
	},
	{
		id: "amount",
		label: "Grand Total"
	},
	{
		id: "shipping_label_url",
		label: "Shipping LBL",
		type: 'icon',
		action: 'download',
	},
	{
		id: "barcode",
		label: "Invoice",
		type: 'icon',
		action: 'download',
	},
	{
		id: "types",
		label: "Picklist",
		type: 'icon',
		action: 'download',
	},
];

export const searchFields = [
	{
		id: "customer_name",
		label: "Customer Name"
	},
	{
		id: "created_at",
		label: "Created On"
	},
	{
		id: "updated_at",
		label: "Updated At"
	},
	{
		id: "order_reference_id",
		label: "Order ID"
	},
	{
		id: "status",
		label: "Status"
	},
];