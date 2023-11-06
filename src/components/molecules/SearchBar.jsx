import { SearchIcon } from "../../assets";
import { Button, Input } from "../atoms";

const SearchBar = () => {
  return (
    <div className="w-[230px] md:w-[400px] relative">
      <Input typeInput="Search" placeholder="Cari Barang ..." />
      <Button className="absolute text-lightgray py-2 px-2 right-1 top-1/2 -translate-y-1/2 border-l-2 border-lightgray">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
