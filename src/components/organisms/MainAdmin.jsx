import React from 'react'
import SubNav from '../molecules/SubNav';
import SubNavHeader from '../molecules/SubNavHeader';
import SubNavContent from '../molecules/SubNavContent';

const MainAdmin = () => {
    return(
        <div className="border rounded-md border-lightgray border-x-[3px] border-t-[3px]">
        <SubNav />
        <SubNavHeader />
        <SubNavContent />
      </div>
    )
}

export default MainAdmin;