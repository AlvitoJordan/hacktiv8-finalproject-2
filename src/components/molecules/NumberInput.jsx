const NumberInput = ({ value, onChange }) => {
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
    <div className="flex items-center justify-center space-x-2">
      <button onClick={() => handleCalculation("decrement")} className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-3 rounded-md">
        -
      </button>
      <input type="number" name="number" value={value} onChange={onChange} className="text-center w-16 h-10 bg-white border-2 border-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent rounded-md" />
      <button onClick={() => handleCalculation("increment")} className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-3 rounded-md">
        +
      </button>
    </div>
  );
};

export default NumberInput;
