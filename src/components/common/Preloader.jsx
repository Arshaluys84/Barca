import React from "react";
import preloader from '../assets/preloader.png'

const Preloader = (props) => {
    return (
        <div className="preloader">
            <img src={preloader} alt="preloader" />
        </div>
    )
}
export default Preloader;
