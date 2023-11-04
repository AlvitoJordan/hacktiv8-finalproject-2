import React from 'react'
import { Button, Text } from '../atoms';
import SideProduct from './SideProduct';

const SubNavContent = () => {
    return(
        <>
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center justify-center p-5 border-lightgray border-b-2">
          <SideProduct
            img=""
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            categories="Phone"
          />
          <div className="flex justify-center items-center">
            <label class="relative inline-flex items-center cursor-pointer select-none">
              <input type="checkbox" class="peer sr-only" />
              <div class="block h-8 w-14 rounded-full bg-lightgray peer-checked:bg-secondary"></div>
              <div class="absolute w-6 h-6 transition rounded-full bg-darkgray peer-checked:translate-x-full peer-checked:bg-primary left-1 top-1"></div>
            </label>
          </div>
          <div>
            <Text
              className="text-center font-medium text-lg text-darkgray"
              text="$10.00"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="number"
              value="1"
              className="text-center w-16 h-10 bg-white border border-2 border-secondary rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <Button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 border-2 border-transparent rounded-md shadow">
              Update
            </Button>
          </div>
        </div>
        </>

    )
}

export default SubNavContent;