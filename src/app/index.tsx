import { useState } from "react";
import "./styles/index.css";

import { Textarea } from "@/shared/ui";

export function App() {
  const handleInputValue = (value: string, { name }: { name: string }) => {
    console.log("[handleInputValue] value:", value, "name:", name);
    setState(value);
  };

  const [state, setState] = useState<string>("");

  return (
    <>
      <h1>Goat corp</h1>
      <p>Whereas disregard and contempt for human rights have resulted</p>

      {/* <Input
        name="email"
        value={state}
        label="Email"
        placeholder="Enter your email"
        onValue={handleInputValue}
      /> */}

      <Textarea
        name="description"
        value={state}
        label="Textarea"
        placeholder="Goat corp placeholder"
        onValue={handleInputValue}
      />
    </>
  );
}
