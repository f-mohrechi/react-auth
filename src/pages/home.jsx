import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate("/login");
    }
  }, []);

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
}
