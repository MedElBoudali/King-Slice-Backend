export default {
	name: "pizza",
	title: "Pizzas",
	type: "document",
	icon: () => "🍕",
	fields: [
		{ name: "name", title: "Pizza Name", type: "string", description: "Name of the pizza" },
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 100
			}
		},
		{
			name: "imafe",
			title: "Image",
			type: "image",
			options: {
				hotspot: true
			}
		},
		{
			name: "price",
			title: "Price",
			type: "number",
			description: "Price of the pizza in cents",
			validation: Rule => Rule.min(1000).max(50000)
		}
	]
};
