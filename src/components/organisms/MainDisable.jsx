import React from "react";
import ReactPaginate from "react-paginate";
import { Button, Text } from "../atoms";
import SideProduct from "../molecules/SideProduct";
import SubNavHeader from "../molecules/SubNavHeader";
import SubNav from "../molecules/SubNav";
import { Header } from "../molecules";
import { changeStatusProduct, updateStock } from "../../redux/fetch/Get";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";

const MainDisable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products } = useSelector((state) => state.getAPI);
  const activeProducts = products.filter((item) => item.status === "inactive");
  const dispatch = useDispatch();
  const perPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 5;
  const pageCount = Math.ceil(activeProducts.length / perPage);
  const offset = currentPage * perPage;
  const currentPageData = activeProducts.slice(offset, offset + perPage);
  const [pendingUpdates, setPendingUpdates] = useState({});

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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
      confirmButtonText: "OK",
      customClass: {
        confirmButton:
          "font-semibold px-6 py-2 hover:bg-secondary bg-primary text-white rounded-lg",
      },
      buttonsStyling: false,
    });
  };
  const handleCheckboxChange = (id) => {
    dispatch(changeStatusProduct({ id, products }));
  };

  return (
    <div className="w-full">
      <Header title="Manage Products" />
      <div className="w-full min-h-screen border rounded-md border-lightgray border-x-[3px] border-t-[3px]">
        <SubNav />
        <SubNavHeader />
        {currentPageData.map((item) => (
          <div
            className="grid grid-cols-[2fr_1fr_2fr_2fr] items-center justify-center  p-5 border-lightgray border-b-2  max-[768px]:relative max-[768px]:flex max-[768px]:flex-col max-[768px]:items-start"
            key={item.id}
          >
            <SideProduct
              image={item.image}
              title={item.title}
              categories={item.category}
            />
            <div className="flex justify-center items-center max-[768px]:absolute max-[768px]:top-4 max-[768px]:right-4">
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={item.status === "active"}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <div
                  className={`block h-8 w-14 rounded-full ${item.status === "active" ? "bg-primary" : "bg-lightgray"
                    }`}
                ></div>
                <div
                  className={`absolute w-6 h-6 transition rounded-full ${item.status === "active" ? "bg-secondary" : "bg-darkgray"
                    } ${item.status === "active" ? "translate-x-full" : ""
                    } left-1 top-1`}
                ></div>
              </label>
            </div>
            <div className="max-[768px]:w-full max-[768px]:flex justify-end max-[768px]:mb-2">
              <Text
                className="text-center font-medium text-lg text-darkgray"
                text={`$ ${item.price}`}
              />
            </div>
            <div className="flex flex-row justify-between max-[768px]:justify-end gap-2 max-w-[200px] max-[768px]:max-w-none w-full  ">
              <div className="flex justify-center">
                <input
                  type="number"
                  value={
                    pendingUpdates[item.id] !== undefined
                      ? pendingUpdates[item.id]
                      : item.stock
                  }
                  className="text-center w-16 h-10 bg-white border-2 border-secondary rounded-md"
                  onChange={(e) =>
                    handleInputChange(item.id, parseInt(e.target.value, 10))
                  }
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="SmallPrimaryButton"
                  onClick={() => handleConfirmUpdate(item.id)}
                  text="Update"
                />
              </div>
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

export default MainDisable;
