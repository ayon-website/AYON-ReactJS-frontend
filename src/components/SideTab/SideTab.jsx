import React from "react";
import "./SideTab.css";
import { ReactComponent as STAR } from "../../assets/AYON_STAR_1.svg"; 


// this should contain
const SideTab = () => {

    // buttons will be wrapped in a scrollable div
    return ( 
        <div className="side-tab-parent">
            <span className="text-span">
                <text id="pl">Q</text>
                <text>UICK </text> 
                <text>DATA</text>
            </span>
            <span className="button-span">
                <button><STAR className="star"/>Channels near</button>
                <button><STAR className="star"/>Top 5 channel providers</button>
                <button><STAR className="star"/>Top 5 provider coverage</button>
                <button><STAR className="star"/>Top 5 launching rockets</button>
                <button><STAR className="star"/>Top 5 growing satellites</button>
                <button><STAR className="star"/>Top 5 channels in each language</button>
            </span>
        </div>
    );
};

export default SideTab;
