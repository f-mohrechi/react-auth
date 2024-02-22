import { Login } from "../pages";

const withAuth = (Component) => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }

  return (props) => {
    if (!user) {
      return <Login />;
    } else {
      return <Component {...props} user={user} />;
    }
  };
};

export default withAuth;
