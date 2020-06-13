import React from "react";

const CustomInput = ({ type, name, id, onChange, value, placeholder }) => {
  return (
    <div>
      <input
        type={type ? type : ""}
        name={name ? name : ""}
        id={id ? id : ""}
        value={value ? value : ""}
        onChange={onChange ? onChange : null}
        placeholder={placeholder ? placeholder : null}
      />
    </div>
  );
};
export default CustomInput;
