import React, { Suspense } from "react";
import Loader from "../../Components/Loader";
const UsersList = React.lazy(() => import("../../Components/UsersList"));

const Users = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Users</h1>
      <Suspense fallback={<Loader>...loading</Loader>}>
        <UsersList />
      </Suspense>
    </div>
  );
};
export default Users;
