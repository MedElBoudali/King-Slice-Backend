export default {
	name: "storeSettings",
	title: "Settings",
	type: "document",
	icon: () => "🏬",
	fields: [
		{ name: "name", title: "Store Name", type: "string", description: "Name of the store" },
		{
			name: "sliceking",
			title: "Slicekings Currently Slicing",
			type: "array",
			of: [{ type: "reference", to: [{ type: "person" }] }]
		},
		{
			name: "hotSlices",
			title: "Hot Slices Available in the case",
			type: "array",
			of: [{ type: "reference", to: [{ type: "pizza" }] }]
		}
	]
};
