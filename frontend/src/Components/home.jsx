import React from "react";
import Search from "./search";
import Card from "./Card";
import homeBG from "./assets/homeBG.png"

export default function Home() {
	return (
    <div style={{marginLeft:'20%', paddingTop: '5%'}}>
        <div style={{ width: "100%", position: "relative"}}>
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
                    zIndex: 1
                }}
            >
                HOME
            </div>
            
            {/* Background */}
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    position: "absolute",
                    boxShadow: "20px 20px 50px 30px #001521 inset",
                    borderTopLeftRadius: 250,
                    border: "1px #024162 solid",
                    zIndex: -1
                }}
                src={homeBG}
            />

            <div className="search" style={{paddingTop: '20%', paddingLeft: '8%', zIndex: 1}}>
                <Search/>
            </div>

            <div className="row" style={{width: '83%', marginLeft:'6.5%', marginTop: '3%', position:'relative'}}>
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
