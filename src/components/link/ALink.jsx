import { Link } from "react-router-dom";

const ALink = ({ text, link }) => {
  return (
    <div className="text-center text-xs font-extralight text-gray-700">
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default ALink;
