import { useState } from "react";
import "./styles/index.css";

import { Input } from "@/shared/ui";

export function App() {
  const tester = () => {
    console.log("Tester:");
  };

  const [state, setState] = useState<string>("");

  return (
    <>
      <h1>Goat corp</h1>
      <p>Whereas disregard and contempt for human rights have resulted</p>

      <Input
        name="email"
        value={state}
        label="Email"
        placeholder="Enter your email"
        onValue={tester}
      />
    </>
  );
}
