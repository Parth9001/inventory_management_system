// MyComponent.js
import React from 'react';
import TextInputBoxWithStylesProdId from './textbox/AddProductIdTextBox';
import TextInputBoxWithStylesName from './textbox/AddNameTextBox';
import TextInputBoxWithStylesProdCode from './textbox/AddProductIdTextBox';
import TextInputBoxWithStylesDesc from './textbox/AddDescTextBox';
import LinkButton from './Button/addButton';
import UploadImage from './Image/uploadImge';
import QuantityCounter from './quantity/addQuan';
function MyComponent() {
  return(<div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 500, height: 80, left: 320, top: 70, position: 'absolute', textAlign: 'center', color: '#083866', fontSize: 96, fontFamily: 'Garamond', fontWeight: '400', wordWrap: 'break-word'}}>Add</div>
  {/*add button*/}
  <img style={{width: 1140, height: 900, left: 0, top: 0, position: 'absolute', boxShadow: '20px 20px 50px 30px #001521 inset', borderTopLeftRadius: 200, border: '1px #024162 solid'}} src="" />
  <div style={{width: 250, height: 50, left: 445, top: 780, position: 'absolute'}}>
      <div style={{position:'absolute'}}><LinkButton /></div>
  </div>
  
  
  {/*desc box*/}
  <div style={{width: 720, height: 186, left: 210, top: 548, position: 'absolute'}}>
    <div style={{position: 'absolute', left:0, top:40}}><TextInputBoxWithStylesDesc /></div>
    <div style={{left: 25, top:0 , position: 'absolute', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Description</div>
  </div>
  
  
  {/*count*/}
  <div>
    <QuantityCounter />
  </div>
  
  
    {/*product code*/}
  <div style={{width: 400, height: 86, left: 210, top: 432, position: 'absolute'}}>
    <div style={{position: 'absolute', left:0, top:20}}><TextInputBoxWithStylesProdCode /></div>
    <div style={{left: 25, top: 0, position: 'absolute', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Product Code</div>
  </div>

  
  {/*name*/}
  <div style={{width: 400, height: 86, left: 210, top: 200, position: 'absolute'}}>
      <div style={{position: 'absolute', left:0, top:20}}><TextInputBoxWithStylesName></TextInputBoxWithStylesName></div>
      <div style={{left: 25, top: 0, position: 'absolute', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Name</div>
  </div>
  

    {/*prod id*/}
  <div style={{width: 400, height: 86, left: 210, top: 316, position: 'absolute'}}>
      <div style={{position: 'absolute', left:0, top:20}}><TextInputBoxWithStylesProdId /></div>
      <div style={{left: 25, top: 0, position: 'absolute', color: '#042453', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Product ID</div>
  </div>


    {/*image upload*/}
    <div style={{position:'absolute', top:300 ,left:800 }}>
        <UploadImage />
    </div>

</div>);
}

export default MyComponent;
