import { Link } from "react-router-dom";

const TextButton = (props) => {
  const { content, type, route, name, className, onClick } = props;
  switch (type) {
    case "btn-border":
      return <button className="bg-vanilla hover:bg-secondary hover:text-vanilla hover:border-transparent text-primary font-semibold py-2 px-8 border-2 border-primary rounded-md shadow">{content}</button>;
    case "btn-iconOnly":
      return (
        <button className="absolute text-lightgray py-2 px-2 right-1 top-1/2 -translate-y-1/2 border-l-2 border-lightgray">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d={content} />
          </svg>
        </button>
      );
    case "btn-link":
      return (
        <li className={name}>
          <Link to={route}>{content}</Link>
        </li>
      );
    default:
      return (
        <button className={`bg-primary hover:bg-secondary text-vanilla font-semibold py-2 px-8 border-2 border-transparent rounded-md shadow ${className} flex justify-center items-center`} onClick={onClick}>
          <p>{content}</p>
        </button>
      );
  }
};

export default TextButton;
