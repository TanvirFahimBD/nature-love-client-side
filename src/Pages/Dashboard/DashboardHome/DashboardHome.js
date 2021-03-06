import * as React from "react";
import useAuth from "../../../hooks/useAuth";
import Admin from "../Admin/Admin";
import User from "../User/User";

const DashBoardHome = () => {
  const { admin } = useAuth();
  return (
    <div>
      {!admin && <User></User>}
      {admin && <Admin></Admin>}
    </div>
  );
};

export default DashBoardHome;
