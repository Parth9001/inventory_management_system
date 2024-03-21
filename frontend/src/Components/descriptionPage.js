import React, { useState, useEffect } from 'react';

export default function DescriptionPage() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('actual_api_endpoint_url_here') // Replace 'actual_api_endpoint_url_here' with your actual API endpoint URL
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {productData && (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img
            style={{
              width: 1140,
              height: 900,
              left: 0,
              top: 0,
              position: 'absolute',
              boxShadow: '20px 20px 50px 5px rgba(0, 21.48, 32.73, 0.75) inset',
              borderTopLeftRadius: 200,
              border: '1px #024162 solid',
              zIndex: -1
            }}
            src=""
          />
          <div
            style={{
              width: 460,
              height: 370,
              left: 120,
              top: 120,
              position: 'absolute',
              background: 'transparent',
              borderRadius: 30,
              border: '3px #042453 solid',
              zIndex: 1
            }}
          >
            <img src={productData.imgSrc} alt="Product" style={{zIndex: 1}}/>
          </div>
          <div
            style={{
              width: 401,
              height: 80,
              left: 630,
              top: 120,
              position: 'absolute',
              textAlign: 'center',
              color: '#083866',
              fontSize: 70,
              fontFamily: 'Garamond',
              fontWeight: '400',
              wordWrap: 'break-word',
              zIndex: 1
            }}
          >
            {productData.productName}
          </div>
          <div style={{ width: 888.06, height: 587, left: 151.94, top: 229, position: 'absolute', zIndex: 1 }}>
            <div style={{ width: 410, height: 261, left: 478.06, top: 0, position: 'absolute' }}>
              <div style={{ width: 410, height: 54, left: 0, top: 69, position: 'absolute' }}>
                <div
                  style={{
                    width: 137,
                    height: 43.2,
                    left: 273,
                    top: 4.8,
                    position: 'absolute',
                    color: '#042453',
                    fontSize: 32,
                    fontFamily: 'Garamond',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    zIndex: 1
                  }}
                >
                  {productData.productID}
                </div>
                <div
                  style={{
                    width: 216,
                    height: 54,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: '#042453',
                    fontSize: 40,
                    fontFamily: 'Garamond',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    zIndex: 1
                  }}
                >
                  Product ID -
                </div>
              </div>
              <div style={{ width: 410, height: 54, left: 0, top: 138, position: 'absolute',  zIndex: 1 }}>
                <div
                  style={{
                    width: 137,
                    height: 43.2,
                    left: 273,
                    top: 7.2,
                    position: 'absolute',
                    color: '#042453',
                    fontSize: 32,
                    fontFamily: 'Garamond',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    zIndex: 1
                  }}
                >
                  {productData.productcode}
                </div>
                <div
                  style={{
                    width: 258,
                    height: 54,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: '#042453',
                    fontSize: 40,
                    fontFamily: 'Garamond',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    zIndex: 1
                  }}
                >
                  Product Code -
                </div>
              </div>
              <div style={{ width: 410, height: 54, left: 0, top: 207, position: 'absolute', zIndex: 1 }}>
                <div
                  style={{
                    width: 30,
                    height: 43.2,
                    left: 380,
                    top: 7.2,
                    position: 'absolute',
                    color: '#042453',
                    fontSize: 32,
                    fontFamily: 'Garamond',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    zIndex: 1
                  }}
                >
                  {productData.quantity}
                </div>
                <div
                  style={{
                    width: 281,
                    height: 54,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: '#042453',
                    fontSize: 40,
                    fontFamily: 'Garamond',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    zIndex: 1
                  }}
                >
                  Stock Available -{' '}
                </div>
              </div>
            </div>
            <div
              style={{
                width: 856,
                height: 210,
                left: 0.06,
                top: 377,
                position: 'absolute',
                color: '#042453',
                fontSize: 30,
                fontFamily: 'Garamond',
                fontWeight: '400',
                wordWrap: 'break-word',
                zIndex: 1
              }}
            >
              {productData.description}
            </div>
            <div
              style={{
                left: 0,
                top: 285,
                position: 'absolute',
                color: '#042453',
                fontSize: 40,
                fontFamily: 'Garamond',
                fontWeight: '700',
                wordWrap: 'break-word',
                zIndex: 1
              }}
            >
              Description
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
