import React, { FC } from "react";
import './checkbox.scss'

interface CustomCheckboxProps{
	title: string;
	checked: boolean;
	onChange: () => void;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({checked,title,onChange}) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" onChange={onChange} checked={checked}/>
      <span></span>
      {title}
    </label>
  );
};

export default CustomCheckbox;
