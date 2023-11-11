import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../molecules";
import { Button } from "../atoms";
import { BackIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const MainRekap = () => {
  const { checkout } = useSelector((state) => state.addCart);
  const [totalPrices, setTotalPrices] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotalPrices = () => {
      const newTotalPrices = checkout.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrices(newTotalPrices);
    };
    calculateTotalPrices();
  }, [checkout]);

  return (
    <div className="w-full">
      <Header title="Rekap Penjualan" />
      <div className="w-full overflow-y-auto border rounded-lg text-base">
        <div className="bg-primary grid grid-cols-5 text-white text-base font-semibold items-center text-center h-16 px-3">
          <div className="col-span-2 border-r-2 border-white py-3 text-left">
            Products
          </div>
          <div className="border-x-2 border-white py-3">Harga</div>
          <div className="border-x-2 border-white py-3">Terjual</div>
          <div className="border-l-2 border-white py-3">Pendapatan</div>
        </div>
        <div className=" min-h-[250px] overflow-y-auto no-scrollbar">
          {checkout.map((product) => {
            return (
              <div className="grid grid-cols-5 font-semibold items-center text-darkgray text-center m-1 px-2 border-2 border-lightgray bg-tablecolor h-16">
                <div className="col-span-2 flex text-left items-center h-full border-r-2 border-lightgray">
                  <div className="flex-row">
                    <p>{product.title}</p>
                    <p className="text-secondary text-xs font-medium">
                      {product.category}
                    </p>
                  </div>
                </div>
                <div className="h-full border-x-2 border-lightgray flex items-center justify-center">{`$ ${product.price}`}</div>
                <div className="h-full border-x-2 border-lightgray flex items-center justify-center">
                  {product.quantity}
                </div>
                <div className="h-full border-l-2 border-lightgray flex items-center justify-center">{`$ ${
                  product.price * product.quantity
                }`}</div>
              </div>
            );
          })}
        </div>
        <div className="bg-vanilla grid grid-cols-5 text-darkgray text-base font-semibold items-center text-center h-16 px-3">
          <div className="col-start-3 col-span-2 text-base font-semibold border-r-2 border-lightgray py-3">
            Total Pendapatan
          </div>
          <div className="text-base font-semibold border-l-2 border-lightgray py-3">
            {totalPrices}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button
          type="CardOutlineButtonWithIcon"
          onClick={() => navigate("/")}
          icon={<BackIcon />}
          text="Continue Shopping"
        />
      </div>
    </div>
  );
};

export default MainRekap;
