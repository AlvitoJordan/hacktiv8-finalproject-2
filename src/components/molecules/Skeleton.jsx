const Skeleton = (props) => {
  const { type } = props;

  switch (type) {
    case "Card":
      return (
        <div className="bg-gray-300 w-[340px] h-[480px] lg:h-[560px] rounded-lg p-4 animate-pulse">
          <div className="w-full h-[150px] lg:h-[250px] rounded-t-lg bg-gray-400 animate-pulse" />
          <div className="bg-gray-400 w-[40%] h-[30px] my-2 animate-pulse" />
          <div className="bg-gray-400 w-[100%] h-[30px] my-2 animate-pulse" />
          <div className="bg-gray-400 w-[100%] h-[50px] my-2 animate-pulse" />
          <div className="bg-gray-400 w-[60%] h-[30px] my-2 animate-pulse" />
          <div className="mt-12 flex items-center justify-end space-x-3">
            <div className="bg-gray-400 w-[40%] h-[50px] my-2 animate-pulse" />
            <div className="bg-gray-400 w-[50%] h-[50px] my-2 animate-pulse" />
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
