/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./dropdownInput.css";

export default function DropdownInput({ label, id, value, onChange, options }) {
  return (
    <div className={`field-container ${id}`}>
      <label className={"label-dropdown"} htmlFor={id}>
        {label}
      </label>
      <select className="dropdown" id={id} value={value} onChange={onChange} autoComplete="off">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
