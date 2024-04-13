import { useState } from "react";

import { Button, GhostButton, Loading } from "@/shared/ui";

import "./styles/index.css";

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

      <Button size="md" variant="outlined">
        Gosha
      </Button>

      <Button variant="link-gray">Link-gray</Button>

      <GhostButton>Ghost</GhostButton>

      {/* <Input
        name="email"
        value={state}
        label="Email"
        placeholder="Enter your email"
        onValue={handleInputValue}
      /> */}

      {/* <Textarea
        name="description"
        value={state}
        label="Textarea"
        placeholder="Goat corp placeholder"
        onValue={handleInputValue}
      /> */}
    </>
  );
}
