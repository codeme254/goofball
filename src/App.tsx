import { useState } from "react";
import Form from "./Form";
import ColumnsOfIds from "./ColumnsOfIds";
import "./App.css";
import generateTestIds from "./utils/generateTestCaseIds";

function App() {
  const [moduleName, setModuleName] = useState("");
  const [numItems, setNumItems] = useState(0);
  const [testIds, setTestIds] = useState<string[] | string[][]>([]);

  const handleGenerate = () => {
    if (!moduleName || numItems <= 0) return;
    setTestIds(generateTestIds(moduleName, numItems));
  };

  return (
    <div id="app">
      <Form
        onSetModuleName={setModuleName}
        onSetNumItems={setNumItems}
        onSubmit={handleGenerate}
      />

      <ColumnsOfIds items={testIds} />
    </div>
  );
}

export default App;
