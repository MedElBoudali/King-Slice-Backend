import React from "react";
import s from "@sanity/desk-tool/structure-builder";

const Sidebar = () => {
	return s
		.list()
		.title("King Slices")
		.items([
			s
				.listItem()
				.title("Home Page")
				.icon(() => "🔥")
				.child(s.editor().schemaType("storeSettings").documentId("downtown")),
			...s.documentTypeListItems().filter(item => item.getId() !== "storeSettings")
		]);
};

export default Sidebar;
