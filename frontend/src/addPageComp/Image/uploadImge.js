import React, { useState } from 'react';

const UploadImage = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{width: '100%', height: '100%', position: 'absolute'}}>
            {!image && (
                <button
                    style={{
                        width: 194,
                        borderRadius: 30,
                        height: 34,
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)', // Center the button
                        color: '#042453',
                        fontSize: 18,
                        fontFamily: 'Garamond',
                        fontWeight: '700',
                        cursor: 'pointer',
                        zIndex: 10, // Button is above other content before image upload
                    }}
                    onClick={() => document.getElementById('fileInput').click()}
                >
                    Upload Picture
                </button>
            )}
            <input id="fileInput" type="file" style={{display: 'none'}} onChange={handleImageChange} />

            <div style={{
                width: 250,
                height: 188,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)', // Center the box
                position: 'absolute',
                background: 'transparent',
                borderRadius: 30,
                border: '3px #042453 solid',
                zIndex: image ? -10 : 0, // Adjust z-index based on image upload
            }}>
                {image && <img src={image} alt="Uploaded" style={{width: '100%', height: '100%', borderRadius: 30}} />}
            </div>
        </div>
    );
};

export default UploadImage;
