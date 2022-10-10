import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/user">User </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
