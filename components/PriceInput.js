import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

const createPatchFrom = value => {
	PatchEvent.from(value ? set(Number(value)) : unset());
};

// const formatMoney = Intl.NumberFormat("en-USA", {
// 	style: "currency",
// 	currency: "USD"
// }).format;

const PriceInput = ({ type: { title, description, name }, value, onChange, inputComponent }) => {
	return (
		<div>
			{/* <h2>{`${title} ${value ? `- ${formatMoney(value / 100)}` : ""}`}</h2> */}
			<p>{description}</p>
			<input type={name} value={value} onChange={e => onChange(createPatchFrom(e.target.value))} ref={inputComponent} />
		</div>
	);
};

export default PriceInput;
