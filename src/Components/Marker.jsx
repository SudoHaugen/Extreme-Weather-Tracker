import React from "react";
import "../static_resources/maps/map_icons/wildfire_main.css";

const Marker = (props) => {
    const { icon } = props;
    return ( 
        <div className="marker">
            <img src={icon} alt="wildfire" className="logo"/>
        </div>
     );
}
 
export default Marker;