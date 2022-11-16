import React, { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React app using babel and webpack {count}</h2>
      <span>
        <h1>Hello world</h1>
      </span>
    </div>
  );
}

export default counter;
