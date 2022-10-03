import React from "react";
import "../../styles/Card.css";

const Card = ({ suggestions }) => {
  return (
    <div>
      <ol className="card-wrapper" aria-label="render-list">
        {suggestions.length > 0 &&
          suggestions.map((el, i) => (
            <li key={i} className="card" data-testid="listitem">
              <span>{el.name}</span>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Card;
