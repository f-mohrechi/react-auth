const Button = ({ text, type, OnClick }) => {
  return (
    <button
      onClick={OnClick}
      className="flex justify-center items-center bg-sky-800 text-sky-100 rounded-lg px-4 py-2 w-full border border-sky-800 hover:bg-sky-100 hover:text-sky-800 transition-all ease-in-out delay-75"
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
