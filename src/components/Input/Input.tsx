import React from "react";

export type InputProps = {
  value?: string;
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, value }) => {
  return <input value={value} />;
};
export default Input;
