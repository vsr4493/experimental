export const schema = {
	title: "Supplier Edit",
	description: "Edit Supplier Details",
	type: "object",
	required: ["name", "type"],
	properties: {
		name: {
			type: "string",
			title: "Supplier Name"
		},
		type: {
			type: "string",
			title: "Supplier Type"
		},
	}
};

export const uiSchema = {
	name: {
		"ui:title": "Supplier Name"
	},
	type: {
		"ui:title": "Supplier Type"
	},
};

export const columns = [
	{
		id: "name",
		label: "Supplier Name"
	},
	{
		id: "types",
		label: "Types"
	},
];

export const searchFields = [
	{
		id: "name",
		label: "Supplier Name"
	},
];
