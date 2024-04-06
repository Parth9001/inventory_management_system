import React, { useState } from "react";
import axios from 'axios'; // Import Axios library
import TextInputBoxWithStylesProdId from "./textbox/AddProductIdTextBox";
import TextInputBoxWithStylesName from "./textbox/AddNameTextBox";
import TextInputBoxWithStylesProdCode from "./textbox/AddProductIdTextBox";
import TextInputBoxWithStylesDesc from "./textbox/AddDescTextBox";
import LinkButton from "./Button/addButton";
import QuantityCounter from "./quantity/addQuan";

function MyComponent() {
  const [quantity, setQuantity] = useState(0);
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [location, setLocation] = useState('');
  const [id, setid] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [accessLevel, setAccessLevel] = useState('user'); // Default value

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
        Add
      </div>
      {/* add button */}
      <img
        style={{
          width: '100%',
          height: 900,
          left: 0,
          top: 0,
          position: "absolute",
          boxShadow: "20px 20px 50px 30px #001521 inset",
          borderTopLeftRadius: 200,
          zIndex: -1,
          backgroundColor: 'white',
        }}
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
        <div style={{ position: "absolute", zIndex: 1 }}>
          <LinkButton image ={image} quantity={quantity} name={name} description={description} code={code} id={id}/>
        </div>
      </div>

      {/* desc box */}
      <div
        style={{
          width: 720,
          height: 186,
          left: 210,
          top: 548,
          position: "absolute",
          zIndex: 1
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 40, zIndex: 1 }}>
          <TextInputBoxWithStylesDesc description={description} setdescription={setdescription} />
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

      {/* count */}
      <div style={{ zIndex: 1 }}>
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      </div>

      {/* product code */}
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
        <div style={{ position: "absolute", left: 0, top: 20, zIndex: 1 }}>
          <TextInputBoxWithStylesProdCode location={location} setLocation={setLocation} />
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
          Product Location
        </div>
      </div>

      {/* name */}
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
        <div style={{ position: "absolute", left: 0, top: 20, zIndex: 1 }}>
          <TextInputBoxWithStylesName name={name} setname={setname} />
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

      {/* prod id */}
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
        <div style={{ position: "absolute", left: 0, top: 20, zIndex: 1 }}>
          <TextInputBoxWithStylesProdId id={id} setid={setid} />
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

      {/* Checkbox for favorite items */}
      <div style={{ position: "absolute", left: 700, top: 250, alignItems: "center" }}>
        <label style={{ color: "#042453", fontSize: 30, fontFamily: "Garamond", fontWeight: "700", marginRight: 10 }}>
          Favorite Item:
        </label>
        <input
          type="checkbox"
          checked={isFavorite}
          onChange={() => setIsFavorite(!isFavorite)}
          style={{ marginLeft: 10 }}
        />
      </div>

      {/* Dropdown list for access level */}
      <div style={{ position: "absolute", left: 700, top: 325 }}>
        <label style={{ color: "#042453", fontSize: 30, fontFamily: "Garamond", fontWeight: "700" }}>
          Access Level:<br></br>
          <select
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
            style={{ marginLeft: 10, border: '3px #042453 solid', borderRadius: 10 }}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default MyComponent;

