import React, {useState} from "react";
import { Image, Text } from "../atoms";
import { DeleteIcon } from "../../assets";

const CartContent = (props) => {
    const {title, categories,price, total} =props
    const [quantity, setQuantity] = useState(1); 

    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increment = () => {
      setQuantity(quantity + 1);
    };

  return (
    <>
      <div className="grid grid-cols-[2fr_0.1fr_1fr_1fr_1fr_0.1fr] items-center justify-center border p-5 rounded-md border-lightgray border-2 my-2">
        <div className="flex flex-row items-center">
          <div className="w-[80px] h-[80px]">
            <Image
              src="https://via.placeholder.com/80"
              alt="noImage"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="ml-4">
            <Text
              className="font-medium text-lg text-darkgray"
              text={title}
              maxLength="33"
            />
            <Text
              className="font-medium text-sm text-secondary mb-2"
              text={categories}
            />
          </div>
        </div>
        <div></div>
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={decrement}
            className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-3 rounded-md"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="text-center w-16 h-10 bg-white border border-2 border-secondary rounded-md"
          />
          <button
            onClick={increment}
            className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-3 rounded-md"
          >
            +
          </button>
        </div>
        <div>
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text={price}
          />
        </div>
        <div>
          <Text
            className="text-center font-medium text-lg text-darkgray"
            text={total}
          />
        </div>
        <div className="flex items-center justify-end">
          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContent;
