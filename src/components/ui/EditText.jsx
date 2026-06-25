import React, { useState } from 'react';

const EditText = ({
  placeholder = "Enter email address here",
  disabled = false,
  className = '',
  value,
  onChange,
  type = "text",
  name,
  id,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setInputValue(newValue);
    if (typeof onChange === 'function') onChange(event);
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      value={value !== undefined ? value : inputValue}
      onChange={handleChange}
      className={`edit-text ${className}`}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;