interface FormProps {
  onSetModuleName: (value: string) => void;
  onSetNumItems: (value: number) => void;
  onSubmit: () => void;
}

function Form({ onSetModuleName, onSetNumItems, onSubmit }: FormProps) {
  return (
    <div className="header">
      <h1>Goofball: Generate Test Case IDs</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="form"
      >
        <input
          type="text"
          placeholder="module name e.g. User Management"
          onChange={(e) => onSetModuleName(e.target.value)}
        />

        <input
          type="number"
          placeholder="number of test case ids"
          onChange={(e) => onSetNumItems(Number(e.target.value))}
        />

        <button type="submit" className="submit-button">
          Generate Test Case IDs
        </button>
      </form>
    </div>
  );
}

export default Form;
