import "./App.css";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import useFetch from "./customHook/useFetch";

function App() {
  const [query, setQuery] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState(1);
  const { loading, error, list } = useFetch(query, pageNumber);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNumber((prev) => prev + 1);
    }
  }, []);
  React.useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  return (
    <div className="App">
      <br />
      <input type="text" name="query" value={query} onChange={handleChange} />
      <div>
        {list?.map((book, index) => (
          <div key={book.key}>{book}</div>
        ))}
      </div>
      <div>{loading && ".....Loading"}</div>
      <div>{error && ".....error"}</div>
      <div ref={loader}></div>
    </div>
  );
}

export default App;
