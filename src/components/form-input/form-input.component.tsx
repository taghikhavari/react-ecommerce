import React from "react";
import "./form-input.styles.scss";

interface IProps {
	handleChange: (e: any) => void;
	label: string;
	name: string;
	type: string;
	value: string;
	isRequired?: boolean;
}

const FormInput = ({
	handleChange,
	label,
	name,
  isRequired,
	...otherProps
}: IProps) => {
	return (
		<div className="group">
			<input
				className="form-input"
        onChange={handleChange}
        name={name}
				required={!!isRequired}
				{...otherProps}
			/>
			{label ? (
				<label
					htmlFor={name}
					className={`${
						otherProps?.value?.length ? "shrink" : ""
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;