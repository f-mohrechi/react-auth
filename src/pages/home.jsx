import withAuth from "../helper/withAuth";

const Home = ({ user }) => {
  return (
    <div>
      <p>home</p>

      {user && (
        <>
          <p>welcome {user.username}</p>
        </>
      )}
    </div>
  );
};

export default withAuth(Home);
