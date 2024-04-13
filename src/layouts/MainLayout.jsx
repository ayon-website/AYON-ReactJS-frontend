import React from 'react';
import './MainLayout.css';
import MenuBar from 'components/MenuBar/MenuBar';
import SideTab from 'components/SideTab/SideTab';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <MenuBar />
            <div>
                <SideTab />
            </div>
        </div>
    );
};

export default MainLayout;