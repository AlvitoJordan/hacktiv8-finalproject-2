import React, {useState} from 'react'

const NumberInput = () => {
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
    )
}

export default NumberInput;