import React, { Component } from "react";
import Username from "./username";
import EnterProdCode from "../editPageComp/textbox/EnterProductId";
import IssueQty from "./issueQty";

export default class ToIssue extends Component {
	render() {
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
					Issue To
				</div>

                {/* background */}
				<img
					style={{
						width: "100%",
						height: 900,
						right: 0,
						top: 0,
						position: "absolute",
						boxShadow: "20px 20px 50px 30px #001521 inset",
						borderTopLeftRadius: 200,
						border: "1px #024162 solid",
						zIndex: -1,
						backgroundColor: "white",
					}}
					src=""
				/>
				<div
					style={{
						width: 250,
						height: 50,
						left: 445,
						top: 700,
						position: "absolute",
						zIndex: 1,
					}}
				>
					<div style={{ position: "absolute", zIndex: 1 }}>
						<button
							style={{
								position: "relative",
								width: 250,
								height: 75,
								background: "#042453",
								border: "3px solid #042453",
								borderRadius: 30,
							}}
						>
							<a
								href="#"
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									left: 0,
									top: 0,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									textDecoration: "none",
								}}
							>
								<div
									style={{
										width: "100%",
										height: 50,
										textAlign: "center",
										color: "white",
										fontSize: 36,
										fontFamily: "Garamond",
										fontWeight: "700",
										wordWrap: "break-word",
									}}
								>
									ISSUE
								</div>
							</a>
						</button>
					</div>
				</div>

				{/*count*/}
				<div style={{ zIndex: 1 }}>
					<IssueQty/>
				</div>

				{/*product code*/}
				<div
					style={{
						width: 400,
						height: 86,
						left: 210,
						top: 432,
						position: "absolute",
						zIndex: 1,
					}}
				>
					<div
						style={{
							position: "absolute",
							left: 0,
							top: 20,
							zIndex: 1,
						}}
					>
						<EnterProdCode />
					</div>
					<div
						style={{
							left: 25,
							top: 0,
							position: "absolute",
							color: "#042453",
							fontSize: 30,
							fontFamily: "Garamond",
							fontWeight: "700",
							wordWrap: "break-word",
							zIndex: 1,
						}}
					>
						Product ID
					</div>
				</div>

				{/*name*/}
				<div
					style={{
						width: 400,
						height: 86,
						left: 210,
						top: 250,
						position: "absolute",
						zIndex: 1,
					}}
				>
					<div
						style={{
							position: "absolute",
							left: 0,
							top: 25,
							zIndex: 1,
						}}
					>
						<Username />
					</div>
					<div
						style={{
							left: 25,
							top: 0,
							position: "absolute",
							color: "#042453",
							fontSize: 30,
							fontFamily: "Garamond",
							fontWeight: "700",
							wordWrap: "break-word",
							zIndex: 1,
						}}
					>
						Employee Username
					</div>
				</div>
			</div>
		);
	}
}
