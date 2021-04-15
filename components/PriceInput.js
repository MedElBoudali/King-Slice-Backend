import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

const createPatchFrom = value => {
	return PatchEvent.from(value ? set(Number(value)) : unset());
};

const formatMoney = Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD"
}).format;

const PriceInput = ({ type: { title, description, name }, value, onChange, inputComponent }) => {
	return (
		<div>
			<h2>
				{title} - {formatMoney(value ?? 0)}
			</h2>
			<p>{description}</p>
			<input type={name} value={value ?? 0} onChange={e => onChange(createPatchFrom(e.target.value))} ref={inputComponent} />
		</div>
	);
};

export default PriceInput;
