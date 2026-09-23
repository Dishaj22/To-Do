
import { useState, useEffect } from "react";

function DocumentTitleSync() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => {
        setCount(count + 1);
      }}>
        Increase Count
      </button>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default DocumentTitleSync;
