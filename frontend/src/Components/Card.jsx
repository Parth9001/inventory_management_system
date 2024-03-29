import React, { Component } from "react";
import Delete from "./assets/delete.svg";
import Edit from "./assets/Edit.svg";
import { Link } from 'react-router-dom';

export default class Card extends Component {
	handleDelete = async () => {
		const { onProductDelete } = this.props;
		try {
			const response = await fetch(`http://127.0.0.1:8000/delete/${this.props.prodID}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (response.ok) {
				onProductDelete(this.props.prodID);
			} else {
				console.error('Failed to delete product');
			}
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	};


	render() {
		return (
			<div className="card">
				<div
					className="hoverBtn"
					style={{
						width: "50%",
						height: "15%",
						top: '22%',
						left: '25%',
						background: "white",
						boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.50)",
						borderRadius: 25,
						border: "2px #5C7C89 solid",
						zIndex: 5,
						position:'relative',
					}}
				>
					<Link to="/edit"><img src={Edit} alt="" style={{marginTop: '5%', marginLeft: '15%'}}/></Link>

					<div
						style={{
							width: "33%", height: 0,
							marginLeft: '34%',
							marginTop:'-10.5%	',
							transform: "rotate(90deg)",
							border: "2px #5C7C89 solid",
						}}
					></div>

					<img src={Delete} alt="" style={{left:0, marginLeft:'63%', marginTop:'-23%'}} onClick={this.handleDelete}/>
				</div>
				<img src="..." className="card-img-top" alt="..."/>
				<div className="card-body">
					<Link to="/prodInfo"><h5 className="card-title">{this.props.name}</h5></Link>
					<p className="prdct-type">Product Type</p>
					<p className="stock">
						Stock Available : <span>{this.props.quantity}</span>
					</p>
				</div>
			</div>
		);
	}
}
