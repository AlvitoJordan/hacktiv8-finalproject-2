import React from "react";
import { CartContent, CartHeader, Header } from "../components/molecules";

const CartPage = () => {
    return(
        <div className="mx-4">
            <Header title="Shopping Cart" />
            <CartHeader />
            <CartContent
             img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <CartContent img="" price="$10.00" total="$100.00" categories="Phone" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
        </div>
    )
}

export default CartPage;