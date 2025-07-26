import React, { useState } from "react";
import HookData from "./data/HookData";
import Slide from "./components/Slide";
import Hooks from "./components/Hooks";

import "./App.css";

export default function App() {
  const [activeHook, setActiveHook] = useState(null);

  return (
    <div className="React-Hooks-Wrapper">
      <div className="React-Hooks">
        <Hooks hookData={HookData} onClick={setActiveHook} />
        {activeHook && (
          <Slide hook={activeHook} onClose={() => setActiveHook(null)} />
        )}
      </div>
    </div>
  );
}
