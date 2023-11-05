import React from 'react'
import { Image, Text } from '../atoms';

const SideProduct = (props) => {
    const {title, categories,image} = props
    return(
        <div className="flex flex-row items-center">
          <div className="w-[80px] h-[80px]">
            <Image
              src={image}
              alt="noImage"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="ml-4">
            <Text
              className="font-medium text-lg text-darkgray"
              text={title}
              maxLength="33"
            />
            <Text
              className="font-medium text-sm text-secondary mb-2"
              text={categories}
            />
          </div>
        </div>
    )
}

export default SideProduct;