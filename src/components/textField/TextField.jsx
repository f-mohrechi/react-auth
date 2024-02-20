import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const TextField = forwardRef(
  ({ type, placeholder, error, icon, label }, ref) => {
    const [secure, setSecure] = useState(false);

    const toggleSecure = () => {
      setSecure(!secure);
      ref.current.type = secure ? "password" : "text";
    };

    return (
      <div>
        <label className="text-gray-500 text-sm">{label}</label>
        <div className="mt-2 flex items-center border border-sky-600 rounded-lg px-4 py-2 gap-2">
          <div className="text-sky-600">{icon}</div>

          <input
            ref={ref}
            type={secure ? "password" : type}
            placeholder={placeholder}
            className="outline-none focus:outline-none w-full text-sky-800 placeholder:text-gray-400"
          />

          {type == "password" && (
            <div
              onClick={toggleSecure}
              className="flex items-center cursor-pointer"
            >
              {secure ? (
                <FiEyeOff className="text-sky-600" />
              ) : (
                <FiEye className="text-sky-600" />
              )}
            </div>
          )}
        </div>
        {error && <p className="text-red-600 pt-1 text-xs">{error}</p>}
      </div>
    );
  }
);

export default TextField;
