import React, { Component } from "react";
import Search from "./search";
import Card from "./Card";

export class Home extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
			searchQuery: "",
			sortBy: "",
			min: 0,
      		max: 0,
			showFavorites: false,
		};
	}

	async componentDidMount() {
		let url = `http://127.0.0.1:8000`;
		let data = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		let parsedData = await data.json();
		this.setState({ products: parsedData });
	}

	handleSearchChange = (event) => {
		this.setState({ searchQuery: event.target.value });
	};

	handleSortChange = (event) => {
		this.setState({ sortBy: event.target.value });
	};

	handleFilterChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: parseInt(value) });
		// console.log([name]+" "+value)
	};

	toggleShowFavorites = () => {
        this.setState({ showFavorites: !this.state.showFavorites});
    };

	render() {

		const { products, searchQuery, sortBy, min, max, showFavorites } = this.state;

		let filteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchQuery.toLowerCase())  &&
            (showFavorites ? product.favourites : true)
		);


		if (sortBy === "name") {
			filteredProducts.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
		} else if (sortBy === "quantity") {
			filteredProducts.sort((a, b) => a.quantity - b.quantity);
		}

		if (min !== 0 || max !== 0) {
			filteredProducts = filteredProducts.filter(
			  (product) => product.quantity >= (min==null ? 0 : parseInt(min)) &&  product.quantity <= (max!=0 ?  parseInt(max) : 1000000)
			);
		}

		return (
			<div style={{ width: "100%", position: "relative" }}>
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
						zIndex: 1,
					}}
				>
					HOME
				</div>

				{/* Background */}
				<img
					style={{
						width: "100%",
						height: "100%",
						left: 0,
						top: 0,
						position: "absolute",
						boxShadow: "20px 20px 50px 30px #001521 inset",
						borderTopLeftRadius: 200,
						zIndex: -1,
						backgroundColor: "white",
					}}
				/>

				<div
					className="search"
					style={{ paddingTop: "20%", paddingLeft: "8%", zIndex: 1 }}
				>
					<Search handleSearchChange={this.handleSearchChange} handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange} toggleShowFavorites={this.toggleShowFavorites} />
				</div>

				<div
					className="row"
					style={{
						width: "83%",
						marginLeft: "6.5%",
						marginTop: "3%",
						position: "relative",
					}}
				>
					{filteredProducts.map((element) => {
						return (
							<div
								className="col-4"
								key={element.id}
								style={{ marginTop: "5%" }}
							>
								<Card
									name={element.name}
									quantity={element.quantity}
									prodID={element.id}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Home;
