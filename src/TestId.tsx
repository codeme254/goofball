import { useState } from "react";
import { LuClipboardCopy } from "react-icons/lu";
import { FaCheckDouble } from "react-icons/fa";

function TestIdItem({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="id-item-row">
      <span className="id-item-text">{id}</span>

      <button
        onClick={handleCopy}
        className="id-item-button"
        title="Copy to clipboard"
      >
        {copied ? <FaCheckDouble /> : <LuClipboardCopy />}
      </button>
    </div>
  );
}

export default TestIdItem;
