import React, {Component} from "react";
import Search from "./search";
import Card from "./Card";

export class Home extends Component {
    constructor() {
        super();
        this.state = {
          products: [],
        };
    }

    async componentDidMount() {
        let url = `http://127.0.0.1:8000`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ products: parsedData.products});
      }


    render(){
        return (
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
                        borderTopLeftRadius: 200,
                        zIndex: -1,
                        backgroundColor: "white"
                    }}
                />

                <div className="search" style={{paddingTop: '20%', paddingLeft: '8%', zIndex: 1}}>
                    <Search/>
                </div>

                <div className="row" style={{width: '83%', marginLeft:'6.5%', marginTop: '3%', position:'relative'}}>
                    {this.state.products.map((element) => { 
                        return (
                        <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                        // <div className="col-md-4" key={element.url}>
                        //     <NewsItem
                        //     title={element.title ? element.title : ""}
                        //     description={
                        //         element.description ? element.description : ""
                        //     }
                        //     imageUrl={element.urlToImage}
                        //     newsUrl={element.url}
                        //     />
                        // </div>
                        );
                    })}
                    {/* <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                    <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                    <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                    <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                    <div className="col-4" style={{marginTop: '5%'}}><Card/></div>
                    <div className="col-4" style={{marginTop: '5%'}}><Card/></div> */}
                </div>
            </div>
        );
    }
}

export default Home;