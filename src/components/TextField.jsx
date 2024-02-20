import { forwardRef } from "react";

const TextField = forwardRef(({ type, placeholder, error }, ref) => {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />

      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
});

export default TextField;
