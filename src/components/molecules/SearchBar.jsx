import { Button, Input } from "../atoms"

const SearchBar = () => {
    return (
        <div className = "w-[345px] relative">
            <Input type="search" placeholder="Cari Barang ..."/>
            <Button type="btn-iconOnly" content="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </div>
    )
}

export default SearchBar