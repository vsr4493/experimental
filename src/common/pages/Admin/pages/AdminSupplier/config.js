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
