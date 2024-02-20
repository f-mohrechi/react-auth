const Title = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-medium text-gray-800 pb-2">{title}</p>
      <p className="text-lg font-medium text-gray-600 pb-2">{text}</p>
    </div>
  );
};

export default Title;
