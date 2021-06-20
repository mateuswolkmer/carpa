import Button from "components/Button";
import Input from "components/Input";
import React from "react";

const Sandbox: React.FC = () => {
  return (
    <div style={{ margin: "30px" }}>
      <div style={{ display: "flex", gap: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Buttons</h1>
          <Button type="accent" size="lg">
            Button
          </Button>
          <Button type="primary">Button</Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Form</h1>
          <h2>Input</h2>
          <Input value="Input" />
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
