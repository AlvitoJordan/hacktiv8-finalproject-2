import React from 'react'
import { Button, Text } from '../atoms'
import { BackIcon } from '../../assets'

const CartButton = () => {
    return(
        <div className="flex flex-row justify-between mt-6 pt-4 pb-4">
        <Button className="bg-white hover:bg-secondary hover:border-transparent hover:text-white text-primary font-semibold py-2 px-3 border-[3px] border-primary rounded-md shadow">
          <div className="flex flex-row px-5">
            <BackIcon className="hover:text-white" />
            <Text className="ml-3" text="Continue Shopping" />
          </div>
        </Button>
        <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
          Checkout
        </Button>
      </div>
    )
}

export default CartButton;