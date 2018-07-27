export const schema = {
	title: "Location Edit",
	description: "Edit location master details",
	type: "object",
	required: ["aisle", "rack", "slab", "bin"],
	properties: {
		aisle: {
			type: "string",
			title: "Aisle"
		},
		rack: {
			type: "string",
			title: "Rack"
		},
		slab: {
			type: "string",
			title: "Slab"
		},
		bin: {
			type: "string",
			title: "Bin"
		}
	}
};

export const uiSchema = {
	aisle: {
		"ui:title": "Aisle"
	},
	rack: {
		"ui:title": "Rack"
	},
	slab: {
		"ui:title": "Slab"
	},
	bin: {
		"ui:title": "Bin"
	}
};

export const columns = [
	{
		id: "vendor.name",
		label: "Warehouse"
	},
	{
		id: "aisle",
		label: "Aisle"
	},
	{
		label: "Rack",
		id: "rack"
	},
	{
		label: "Slab",
		id: "slab"
	},
	{
		label: "Bin",
		id: "bin"
	}
];

export const searchFields = [
	{
		id: "aisle",
		label: "Aisle"
	},
	{
		label: "Rack",
		id: "rack"
	},
	{
		label: "Slab",
		id: "slab"
	},
	{
		label: "Bin",
		id: "bin"
	}
];

export const pageTitle = 'Location Master';
export const itemSchema = {
	'vendor.name': "Warehouse",
	'rack': "Rack",
	'slab': "Slab",
	'bin': "Bin",
};
