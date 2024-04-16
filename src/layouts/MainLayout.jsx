import React from 'react';
import './MainLayout.css';
import MenuBar from 'components/MenuBar/MenuBar';
import SideTab from 'components/SideTab/SideTab';
import StarDeco from 'components/StarDeco/StarDeco';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <StarDeco />
            <MenuBar />
            <SideTab />
        </div>
    );
};

export default MainLayout;
