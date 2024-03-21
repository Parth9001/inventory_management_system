import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default function Navbarcomponent({ svgcode, text }){
    const getLink = (text) => {
        switch (text) {
          case 'Home':
            return '/';
          case 'Add':
            return '/add';
          case 'Issued':
            return '/issued';
          case 'Audit':
            return '/audit';
          default:
            return '/';
        }
      };

return (

    <div className="navbarcomponent">
            <div className="navbarcomponentimg" dangerouslySetInnerHTML={{ __html: svgcode }} />
            <div className="navbarcomponenttxt">
                <Link to={getLink(text)}><button className="navbarcomponentbutton">{text}</button></Link>
            </div>

    </div>
    );
}