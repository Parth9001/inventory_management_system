import React, { Component } from "react";

export default class Card extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Product Name</h5>
						<p className="prdct-type">Product Type</p>
						<p className="stock">Stock Available : <span>0</span></p>
					</div>
				</div>
			</div>
		);
	}
}
