import React, { useEffect, useState } from "react";
import { Button, Text } from "../atoms";
import SideProduct from "./SideProduct";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusProduct, getAPIAct, updateStock } from "../../redux/fetch/Get";
import ReactPaginate from "react-paginate";
import Skeleton from "../atoms/Skeleton";
import Swal from "sweetalert2";

const SubNavContent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products } = useSelector((state) => state.getAPI);
  const dispatch = useDispatch();
  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 5;
  const pageCount = Math.ceil(products.length / perPage);
  const offset = currentPage * perPage;
  const currentPageData = products.slice(offset, offset + perPage);

  const [pendingUpdates, setPendingUpdates] = useState({});
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAPIAct(`https://fakestoreapi.com/products`));
    }
  }, [dispatch, products.length, products]);

  const handleCheckboxChange = (id) => {
    dispatch(changeStatusProduct({ id, products }));
  };

  const handleInputChange = (productId, value) => {
    setPendingUpdates((prevUpdates) => ({
      ...prevUpdates,
      [productId]: value,
    }));
  };

  const handleConfirmUpdate = (productId) => {
    const newStock = pendingUpdates[productId];
    if (newStock !== undefined) {
      dispatch(updateStock({ id: productId, stock: newStock }));
      setPendingUpdates((prevUpdates) => ({
        ...prevUpdates,
        [productId]: undefined,
      }));
    }
    Swal.fire({
      title: "Success",
      text: "Stock has been update",
      icon: "success",
    });
  };

  return (
    <>
      {currentPageData.length > 0 ? (
        <>
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
                <input
                  type="number"
                  value={pendingUpdates[item.id] !== undefined ? pendingUpdates[item.id] : item.stock}
                  className="text-center w-16 h-10 bg-white border-2 border-secondary rounded-md"
                  onChange={(e) => handleInputChange(item.id, parseInt(e.target.value, 10))}
                />
              </div>

              <div className="flex justify-center">
                <Button TypeButton="ButtonPrimary" className="font-semibold text-white" onClick={() => handleConfirmUpdate(item.id)}>
                  Update
                </Button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Skeleton type="Products" />
      )}
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
    </>
  );
};

export default SubNavContent;
