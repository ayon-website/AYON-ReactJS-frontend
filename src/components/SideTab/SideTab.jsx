import React from "react";
import "./SideTab.css";
import { ReactComponent as STAR } from "../../assets/AYON_STAR_1.svg"; 


// this should contain
const SideTab = () => {

    return ( 
        <div className="side-tab-parent">
            <span className="text-span">
                <text id="pl">Q</text>
                <text>UICK </text> 
                <text>DATA</text>
            </span>
            <button><STAR className="star"/>CHANNELS NEAR</button>
            <button><STAR className="star"/>TOP 5 CHANNEL PROVIDERS</button>
            <button><STAR className="star"/>TOP 5 PROVIDER COVERAGE</button>
            <button><STAR className="star"/>TOP 5 LAUNCHING ROCKETS</button>
            <button><STAR className="star"/>TOP 5 GROWING SATELLITES</button>
            <button><STAR className="star"/>TOP 5 CHANNELS IN EACH LANGUAGE</button>
        </div>
    );
};

export default SideTab;