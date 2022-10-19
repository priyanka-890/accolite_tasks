import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ErrorBoundary>
        {" "}
        <AllRoutes />{" "}
      </ErrorBoundary>
    </div>
  );
}

export default App;
