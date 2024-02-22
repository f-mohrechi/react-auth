import { useContext } from "react";
import withAuth from "../helper/withAuth";
import { Context } from "../context/mainContext";
import { Button } from "../components";
import { useNavigate } from "react-router";

const Home = () => {
  const { user, dispatch, isAuthenticated, settings } = useContext(Context);
  const { lang } = settings;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    dispatch("user", {});
    navigate("/login");
  };

  const handleChangeLang = (lang) => {
    dispatch(
      "settings",
      {
        ...settings,
        lang: lang,
      },
      true
    );
  };

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg w-96">
        <div className="text-center">
          <p>home</p>
        </div>

        {isAuthenticated && (
          <>
            <p>welcome {user.username}</p>
          </>
        )}

        <p>current lang is {lang}</p>

        {lang === "en" ? (
          <Button
            OnClick={() => {
              handleChangeLang("fa");
            }}
            text={"fa"}
          />
        ) : (
          <Button
            OnClick={() => {
              handleChangeLang("en");
            }}
            text={"en"}
          />
        )}

        <Button OnClick={handleLogout} text={"log out"} />
      </div>
    </div>
  );
};

export default withAuth(Home);
