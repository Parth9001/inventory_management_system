import React from "react";

function IssuedCard() {
	return (
		<div style={{ width: "100%", height: "100%", position: "relative", marginTop: "11%", marginLeft: "2%" }}>
			<div
				style={{
					width: 970,
					height: 100,
					left: 0,
					top: 0,
					position: "absolute",
					background: "white",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					borderRadius: 20,
					border: "3px #4C7ED5 solid",
					zIndex: 1
				}}
			>
				<div
					style={{
						width: 129,
						height: 84,
						left: 5,
						top: 5,
						position: "absolute",
						background: "#042453",
						borderRadius: 10,
						zIndex: 1
					}}
				/>
				<div
					style={{
						left: 147,
						top: 8,
						position: "absolute",
						textAlign: "center",
						color: "#042453",
						fontSize: 30,
						fontFamily: "Garamond",
						fontWeight: "700",
						wordWrap: "break-word",
						zIndex: 1
					}}
				>
					Product Name
				</div>
				<div
					style={{
						left: 147,
						top: 42,
						position: "absolute",
						textAlign: "center",
						color: "#4C7ED5",
						fontSize: 20,
						fontFamily: "Garamond",
						fontWeight: "400",
						wordWrap: "break-word",
						zIndex: 1
					}}
				>
					Product Type
				</div>
				<div
					style={{
						width: 170,
						height: 46,
						left: 547,
						top: 27,
						position: "absolute",
						textAlign: "center",
						color: "#4C7ED5",
						fontSize: 20,
						fontFamily: "Garamond",
						fontWeight: "400",
						wordWrap: "break-word",
						zIndex: 1
					}}
				>
					DD/MM/YYYY
					<br />
					00:00
				</div>
				<div
					style={{
						width: 114,
						height: 46,
						left: 804,
						top: 27,
						position: "absolute",
						textAlign: "center",
						color: "#4C7ED5",
						fontSize: 20,
						fontFamily: "Garamond",
						fontWeight: "400",
						wordWrap: "break-word",
						zIndex: 1
					}}
				>
					00
				</div>
			</div>
		</div>
	);
}
export default IssuedCard;