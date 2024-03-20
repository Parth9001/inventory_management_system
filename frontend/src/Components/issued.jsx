import React from "react";

import Search from "./search";
import IssuedCard from "./IssuedCard";

export default function Issued() {
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
				Issued
			</div>

			{/* Background */}
			<img
				style={{
					width: "100%",
					height: "115%", //not able to scale automatically with 100%, this is hard coded for now
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
				<Search />
			</div>

			<div
				className="col"
				style={{
					width: "83%",
					marginLeft: "6.5%",
					marginTop: "3%",
					position: "relative",
				}}
			>
				<div className='row'>
					<IssuedCard />
				</div>
				<div className='row'>
					<IssuedCard />
				</div>
				<div className='row'>
					<IssuedCard />
				</div>
				<div className='row'>
					<IssuedCard />
				</div>
				<div className='row'>
					<IssuedCard />
				</div>
				<div className='row'>
					<IssuedCard />
				</div>
			</div>
		</div>
	);
}
