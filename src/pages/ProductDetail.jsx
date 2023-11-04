import React from "react";
import { Button, Image, NumberInput, Text } from "../components";
import { Rating, ShoppingCart } from "../assets";

const ProductDetail = () => {
  return (
    <div className="w-full min-h-[545px] items-center justify-center">
      <div className="flex justify-center">
        <div>
          <Image
            src="https://via.placeholder.com/600"
            alt="Product Image"
            className="rounded-lg w-[400px] h-[400px]"
          />
        </div>
        <div className="w-1/2 px-5">
          <Text className="font-bold text-5xl text-darkgray" text="Nama Product"></Text>
          <div className="flex flex-row gap-3 items-center text-yellow">
            <Rating />
            <Text className="text-darkgray font-semibold text-lg" text="4.8" />
            
          </div>
          <Text className="text-xl font-semibold my-4 text-darkgray" text="$100.00"></Text>
          <Text className="text-base font-medium my-4 text-darkgray"text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></Text>
          <div className="flex flex-row gap-5 items-center mt-5 mb-10">
            <NumberInput />
            <Text className="text-darkgray font-semibold" text="Stock : 10" />
          </div>
          <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
            <div className="flex flex-row px-5 items-center">
              <ShoppingCart className="hover:text-white" />
              <Text className="ml-3" text="Add to Cart" />
            </div>
          </Button>
        </div>
      </div>
    </div>
    // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    //   <div className="bg-white p-4 rounded-lg shadow-lg max-w-screen-md">
    //     <div className="flex">
    //       <div className="w-1/2">
    //         <img
    //           src="gambar_produk.jpg"
    //           alt="Nama Produk"
    //           className="w-full h-auto rounded-lg"
    //         />
    //       </div>
    //       <div className="w-1/2 p-4">
    //         <h1 className="text-2xl font-semibold mb-2">Nama Produk</h1>
    //         <p className="text-gray-700 mb-4">Deskripsi singkat produk.</p>
    //         <p className="text-xl font-semibold mb-2">Harga: $99.99</p>
    //         <p className="text-gray-700 mb-4">Stok: 10</p>
    //         <NumberInput />
    //         <button className="bg-blue-500 text-white rounded-md px-4 py-2">Beli Sekarang</button>
    //       </div>
    //     </div>
    //     <div className="mt-4">
    //       <h2 className="text-xl font-semibold">Deskripsi Produk</h2>
    //       <p className="text-gray-700">
    //         Deskripsi lengkap produk. Anda dapat menambahkan teks lebih lanjut untuk menjelaskan produk ini.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductDetail;
