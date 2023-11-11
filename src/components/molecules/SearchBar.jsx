import { SearchIcon } from "../../assets";
import { Button, Input } from "../atoms";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchProduct}`);
  };

  return (
    <>
      <Input
        typeInput="Search"
        placeholder="Search for items..."
        value={searchProduct}
        onChange={handleInputChange}
      />
      <Button
        className="absolute text-lightgray py-2 px-2 right-1 top-1/2 -translate-y-1/2 border-l-2 border-lightgray"
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
    </>
  );
};

export default SearchBar;
