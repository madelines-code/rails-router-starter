import { useContext } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Home!</h1>
      {JSON.stringify(auth)}
      <p onClick={auth.handleLogin}>Login</p>
      <p onClick={auth.handleLogout}>Logout</p>
      <Link to='/protected'>Protected</Link>
      <Link to='/public'>Public</Link>
    </div>
  );
};
export default Home;