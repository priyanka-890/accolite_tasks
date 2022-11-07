import React from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const handleAuth = () => {
    setIsAuth({ token: true });
  };

  return (
    <div>
      {isAuth.token ? (
        <Navigate to="/features"></Navigate>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <Form style={{ margin: "5%  40%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                style={{ width: "400px" }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ width: "400px" }}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={handleAuth}>
              submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};
export default Login;
