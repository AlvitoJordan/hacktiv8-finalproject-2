import { Link } from "react-router-dom";
import { ListLink, SearchBar } from "../molecules";
import { ICBukaPedia } from "../../assets";

const NavBar = () => {
  return (
    <nav className="flex bg-white justify-between items-center px-8 py-4 border-b-2">
      <div className="flex flex-row items-center">
        <Link to="/" className="flex flex-row items-center">
          <ICBukaPedia />
          <span className="text-2xl p-2 font-normal text-darkgray logo">BukaPedia</span>
        </Link>
        <div className="pl-10">
          <SearchBar />
        </div>
      </div>
      <ListLink />
    </nav>
  );
};

export default NavBar;
