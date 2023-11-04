import React from 'react'
import { Line, Links } from '../atoms';

const SubNav = () => {
    return(
      <>
        <nav class="w-full bg-white font-semibold text-darkgray px-5 py-4">
          <ul class="flex space-x-6">
            <Links to="/" className=" hover:text-secondary">  
              All Product
            </Links>
            <Links to="/" className=" hover:text-secondary">
              Availabled
            </Links>
            <Links to="/" className=" hover:text-secondary">
                Disabled
            </Links>
          </ul>
        </nav>
        <Line className="border border-primary border-b-[3px]" />
      </>
    )
    
}

export default SubNav;