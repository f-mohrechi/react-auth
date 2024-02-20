import { useRef, useState } from "react";
import TextField from "../components/TextField";
import { register } from "../services/auth";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
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

    console.log(data, "data");

    register(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg w-96"
      >
        <TextField ref={usernameRef} type="text" placeholder=" name" />
        <TextField ref={emailRef} type="text" placeholder=" username" />
        <TextField
          error={error["password"]}
          ref={passwordRef}
          type="text"
          placeholder=" Password"
        />

        <button>
          <span>Sign In</span>
        </button>
      </form>
    </div>
  );
}

export default Register;
