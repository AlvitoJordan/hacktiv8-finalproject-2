import React, { useState } from "react";
import { Button, Header, Text } from "../components";
import SubNav from "../components/molecules/SubNav";
import SubNavHeader from "../components/molecules/SubNavHeader";

import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusProduct } from "../redux/fetch/Get";
import SideProduct from "../components/molecules/SideProduct";

const DisabledPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { product: products } = useSelector((state) => state.getAPI);
  const activeProducts = products.filter((item) => item.status === "inactive");
  const dispatch = useDispatch();
  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 5;
  const pageCount = Math.ceil(activeProducts.length / perPage);
  const offset = currentPage * perPage;
  const currentPageData = activeProducts.slice(offset, offset + perPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleInputChange = (e) => {
    // onChange(e.target.value);
  };
  const handleCheckboxChange = (id) => {
    dispatch(changeStatusProduct({ id, products }));
  };

  return (
    <div>
      <Header title="Manage Products" />
      <div className="border rounded-md border-lightgray border-x-[3px] border-t-[3px]">
        <SubNav />
        <SubNavHeader />
        {currentPageData.map((item) => (
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center justify-center p-5 border-lightgray border-b-2" key={item.id}>
            <SideProduct image={item.image} title={item.title} categories={item.category} />
            <div className="flex justify-center items-center">
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input type="checkbox" className="peer sr-only" checked={item.status === "active"} onChange={() => handleCheckboxChange(item.id)} />
                <div className={`block h-8 w-14 rounded-full ${item.status === "active" ? "bg-primary" : "bg-lightgray"}`}></div>
                <div className={`absolute w-6 h-6 transition rounded-full ${item.status === "active" ? "bg-secondary" : "bg-darkgray"} ${item.status === "active" ? "translate-x-full" : ""} left-1 top-1`}></div>
              </label>
            </div>
            <div>
              <Text className="text-center font-medium text-lg text-darkgray" text={`$ ${item.price}`} />
            </div>
            <div className="flex justify-center">
              <input type="number" value={item.stock} onChange={handleInputChange} className="text-center w-16 h-10 bg-white border-2 border-secondary rounded-md" />
            </div>

            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">Update</Button>
            </div>
          </div>
        ))}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active bg-primary border-none text-white"}
          className="flex justify-center space-x-5 mt-6 flex-wrap w-full"
          previousClassName="flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color border-2 border-primary"
          nextClassName="border-2 border-primary border-gray-500 flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color"
          pageClassName="border-2 border-primary flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text-black mb-4"
        />
      </div>
    </div>
  );
};

export default DisabledPage;
