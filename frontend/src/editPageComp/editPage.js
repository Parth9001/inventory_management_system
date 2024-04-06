// MyComponent.js
import React from "react";
import UpdateProdId from "./textbox/updateProductCode";
import EditImage from "./updateImage/updateImage";
import EditButton from "./Button/editButton";
import UpdateDesc from "./textbox/updateDescTextBox";
import EditQuan from "./Quantity/editQuan";
import UpdateName from "./textbox/updateNameTextBox";
import EnterProdCode from "./textbox/EnterProductId";
function EditPage() {
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
          zIndex: 1
				}}
			>
				Edit
			</div>
			{/*add button*/}
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
          backgroundColor:'white'
				}}
				src=""
			/>
			<div
				style={{
					width: 250,
					height: 50,
					left: 445,
					top: 780,
					position: "absolute",
          zIndex: 1
				}}
			>
				<div style={{ position: "absolute",zIndex: 1 }}>
					<EditButton />
				</div>
			</div>

			{/*desc box*/}
			<div
				style={{
					width: "100%",
					height: 186,
					left: 210,
					top: 548,
					position: "absolute",
          zIndex: 1
				}}
			>
				<div style={{ position: "absolute", left: 0, top: 40 ,zIndex: 1}}>
					<UpdateDesc />
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
            zIndex: 1
					}}
				>
					Description
				</div>
			</div>

			{/*count*/}
			<div style={{zIndex: 1}}>
				<EditQuan />
			</div>

			{/*product code*/}
			<div
				style={{
					width: 400,
					height: 86,
					left: 210,
					top: 432,
					position: "absolute",
          zIndex: 1
				}}
			>
				<div style={{ position: "absolute", left: 0, top: 20,zIndex: 1 }}>
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
            zIndex: 1
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
					top: 200,
					position: "absolute",
          zIndex: 1
				}}
			>
				<div style={{ position: "absolute", left: 0, top: 20,zIndex: 1 }}>
					<UpdateName />
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
            zIndex: 1
					}}
				>
					Name
				</div>
			</div>

			{/*prod id*/}
			<div
				style={{
					width: 400,
					height: 86,
					left: 210,
					top: 316,
					position: "absolute",
          zIndex: 1
				}}
			>
				<div style={{ position: "absolute", left: 0, top: 20,zIndex: 1 }}>
					<UpdateProdId />
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
            zIndex: 1
					}}
				>
					Product Code
				</div>
			</div>

			{/*image upload*/}
			<div style={{ position: "absolute", top: 300, left: 800,zIndex: 1 }}>
				<EditImage />
			</div>
		</div>
	);
}

export default EditPage;
