import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};
export default Loader;
