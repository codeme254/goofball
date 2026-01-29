import TestIdItem from "./TestId";

function ColumnsOfIds({ items }: { items: string[] | string[][] }) {
  // Check if the first item is an array (nested array)
  const isNested = Array.isArray(items[0]);

  if (!isNested) {
    // Flat array case
    return (
      <div className="column-single">
        {(items as string[]).map((item, i) => (
          <TestIdItem key={i} id={item} />
        ))}
      </div>
    );
  }

  // Nested array case
  return (
    <div className="rows">
      {(items as string[][]).map((group, groupIndex) => (
        <div>
          {group.map((id, i) => (
            <TestIdItem key={`${groupIndex}-${i}`} id={id} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ColumnsOfIds;
