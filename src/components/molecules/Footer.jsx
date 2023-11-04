import { Hacktiv8 } from "../../assets";

const Footer = (props) => {
  const { copyright, text } = props;
  return (
    <div className="bg-white_color w-full h-auto shadow-2xl bottom-0">
      <div className="max-w-[1800px] w-full mx-auto flex flex-row justify-between max-[1000px]:justify-center items-center py-5 text-text_color flex-wrap lg:px-[70px] px-5 ">
        <div className="flex lg:flex-row-reverse flex-col lg:gap-4 gap-2 lg:justify-between justify-center w-full  lg:w-2/4 items-center flex-wrap ">
        <Hacktiv8 className="rounded-full w-10 h-10"/>
          <span>{copyright}</span>
        </div>
        <span className=" lg:w-auto lg:text-end w-full text-center ">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Footer;
