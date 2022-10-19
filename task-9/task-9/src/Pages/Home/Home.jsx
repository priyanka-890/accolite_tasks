import React, { Suspense } from "react";
import Loader from "../../Components/Loader";
const AllProducts = React.lazy(() => import("../../Components/AllProducts"));

const Home = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>React Lazy Loading</h1>
      <Suspense fallback={<Loader>...loading</Loader>}>
        <AllProducts />
      </Suspense>
    </div>
  );
};
export default Home;
