import React, { Component } from "react";

function Navbarcomponent({ svgcode, text }){
return (
    <div className="navbarcomponent">
        <div className="navbarcomponentimg" dangerouslySetInnerHTML={{ __html: svgcode }} />
        <div className="navbarcomponenttxt"><button className="navbarcomponentbutton">{text}</button></div>
    </div>
    );
}
export default Navbarcomponent;