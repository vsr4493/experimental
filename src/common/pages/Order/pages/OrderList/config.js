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
];

export const pageTitle = "Order Master";
export const searchFields = [
	{
		id: "customer_name",
		label: "Customer Name"
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