import React from 'react'
import { CartButton, CartContent, CartHeader } from '../molecules';

const MainCart = (props) => {
    const {title, categories, price, total} = props
    return(
        <>
            <CartHeader />
            <CartContent title={title} categories={categories} price={price} total={total} />
            <CartButton />
        </>
    )
}

export default MainCart;