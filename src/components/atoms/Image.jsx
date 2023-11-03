import React from 'react'

const Image = (props) => {
    const {img} = props
    return(
        <>
        {img ? (
            <img
              src={img}
              alt="nama"
              className="w-full h-[250px] rounded-t-lg object-cover"
            />
          ) : (
            <div className="w-full h-[250px] rounded-t-lg bg-lightgray"></div>
          )}
        </>    
    )
}

export default Image;
