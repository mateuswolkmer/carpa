import classNames from "classnames";
import React from "react";

export type ButtonProps = {
  text?: string;
  type?: "normal" | "primary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<ButtonProps> = ({ children, size, type }) => {
  return (
    <button
      className={classNames("button", {
        [`button--${type}`]: type,
        [`button--${size}`]: size,
      })}
    >
      {children}
    </button>
  );
};
export default Button;
