import { useRef, useState } from "react";
import { TextField, Button, Title, ALink } from "../components";
import { register } from "../services/auth";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      // email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const errors = {};
    for (let [key, value] of Object.entries(data)) {
      if (!value) {
        errors[key] = `${key} is required`;
      }
    }

    if (data.password && data.password.length < 8) {
      errors["password"] = "Password must be at least 8 characters";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    } else {
      setError({});
    }

    register(data).then((res) => {
      if (res.status === 200) {
        navigate("/login");
        console.log("result", res.config.data);
      }
    });
  };

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen px-5">
      <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg w-96">
        <div>
          <Title title={"Register"} text={"Create an account"} />
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <TextField
            label={"username"}
            error={error["username"]}
            ref={usernameRef}
            type="text"
            placeholder=" username"
            icon={<FiUser />}
          />
          {/* <TextField
            label={"email"}
            error={error["email"]}
            ref={emailRef}
            type="text"
            placeholder=" email"
            icon={<FiMail />}
          /> */}
          <TextField
            label={"password"}
            error={error["password"]}
            ref={passwordRef}
            type="password"
            placeholder=" Password"
            icon={<FiLock />}
          />
          <div className="mt-3 flex justify-center">
            <Button type={"submit"} text={"Register"} />
          </div>

          <div className="mt-3">
            <ALink text={"Already have an account? Login"} link={"/login"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
