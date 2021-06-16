import React from "react";

export type InputProps = {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label }) => {
  return <input />;
};
export default Input;
