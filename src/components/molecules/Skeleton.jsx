import { ICImage } from "../../assets";

const Skeleton = (props) => {
  const { type } = props;

  switch (type) {
    case "Card":
      return (
        <div className="lg:mx-0 overflow-hidden shadow-box_item rounded-lg ">
          <div className="flex justify-center items-center w-full h-[150px] lg:h-[250px] bg-gray-200 animate-pulse rounded-t-lg">
            <ICImage />
          </div>
          <div className="flex flex-col justify-between">
            <div className="px-6 py-4">
              <div className="w-1/4 h-5 mb-2 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="h-4 mb-2 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="w-1/4 h-5 mb-2 bg-gray-200 animate-pulse  rounded-md"></div>
              <div className="h-16 mb-2  bg-gray-200 animate-pulse  rounded-md"></div>
              <div className="w-3/4 h-5 mb-2 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-end gap-3 mt-5 px-6 pb-6">
              <div className="lg:w-20 h-10 rounded-md bg-gray-200 animate-pulse"></div>
              <div className="lg:w-40 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      );
    case "Products":
      return (
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center justify-center p-5 border-lightgray border-b">
          <div className=" flex items-center space-x-5">
            <div className="w-[100px] h-[70px] bg-gray-400 animate-pulse"></div>
            <div className="flex flex-col space-y-2 w-full">
              <div className="w-full h-[30px] bg-gray-400 animate-pulse" />
              <div className="w-[100px] h-[30px] bg-gray-400 animate-pulse" />
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="w-[100px] h-[30px] bg-gray-400 animate-pulse" />
          </div>
          <div className=" flex justify-center">
            <div className="w-[100px] h-[30px] bg-gray-400 animate-pulse" />
          </div>
          <div className=" flex justify-center">
            <div className="w-[100px] h-[30px] bg-gray-400 animate-pulse" />
          </div>
          <div className=" flex justify-center">
            <div className="w-[100px] h-[30px] bg-gray-400 animate-pulse" />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Skeleton;
