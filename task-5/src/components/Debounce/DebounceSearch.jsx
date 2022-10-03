import React, { useCallback, useState } from "react";
import Card from "./Card";
import "../../styles/Card.css";

const DebounceSearch = () => {
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const handleChange = (value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items));
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <>
      <h2 className="heading">DEBOUNCING </h2>

      <input
        name="input"
        type="text"
        className="input"
        placeholder="Enter something here..."
        data-testid="input"
        onChange={(e) => optimizedFn(e.target.value)}
      />

      <Card suggestions={suggestions} />
    </>
  );
};

export default DebounceSearch;
