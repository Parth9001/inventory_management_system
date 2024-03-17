import React from "react";
import Search from "./search";
import Card from "./Card";

export default function Home() {
	return (
    <div style={{zIndex:5, marginLeft:'20%', paddingTop: '5%'}}>
        <div style={{ width: "100vw", position: "relative", overflow: 'hidden'}}>
            <div
                style={{
                    width: 500,
                    height: 80,
                    left: 320,
                    top: 70,
                    position: "absolute",
                    textAlign: "center",
                    color: "#083866",
                    fontSize: 96,
                    fontFamily: "Garamond",
                    fontWeight: "400",
                    wordWrap: "break-word",
                }}
            >
                HOME
            </div>
            
            {/* Background */}
            <img
                style={{
                    width: 1140,
                    height: '100%',
                    left: 0,
                    top: 0,
                    position: "absolute",
                    boxShadow: "20px 20px 50px 30px #001521 inset",
                    borderTopLeftRadius: 200,
                    border: "1px #024162 solid",
                    zIndex: 10
                }}
                src=""
            />

            <div className="search" style={{paddingTop: '15%', paddingLeft: '8%'}}>
                <Search/>
            </div>

            <div className="row" style={{width: '67%', marginLeft:'6.5%', marginTop: '3%'}}>
                <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
            </div>
        </div>
    </div>
	);
}
