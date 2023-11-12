import React from "react";
import { Button } from "../atoms";

const NumberInput = ({ value, onChange }) => {
  // Fungsi untuk mengganti nilai menjadi 0 jika nilai adalah string kosong
  const handleInputChange = (e) => {
    const newValue =
      e.target.value.trim() === "" ? 0 : parseFloat(e.target.value);
    onChange(newValue);
  };

  const handleCalculation = (type) => {
    if (type === "increment") {
      onChange(value + 1);
    } else if (type === "decrement") {
      if (value > 1) {
        onChange(value - 1);
      }
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 max-[768px]:w-full">
      <Button
        type="OperatorButton"
        onClick={() => handleCalculation("decrement")}
        text="-"
      />
      <input
        type="number"
        name="number"
        value={value}
        onChange={handleInputChange}
        className="text-center w-16 h-10 bg-white border-2 border-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent rounded-md"
      />
      <Button
        type="OperatorButton"
        onClick={() => handleCalculation("increment")}
        text="+"
      />
    </div>
  );
};

export default NumberInput;
