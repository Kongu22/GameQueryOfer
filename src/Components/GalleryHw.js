import React, { useState } from 'react';

export default function GalleryHw() {
    const [counter, setCounter] = useState(0);
    const imgArr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
    
    const handleNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % imgArr.length);
    };

    const handleBack = () => {
        setCounter((prevCounter) => (prevCounter - 1 + imgArr.length) % imgArr.length);
    };

    const imgStyle = {
        width: '200px', // Adjust width as needed
        height: '200px', // Adjust height as needed
        objectFit: 'cover' // Adjust how images fit within the box (cover, contain, etc.)
    };
    
    return (
        <div className='container text-center'>
            <img 
                src={`/Images/${imgArr[counter]}`} 
                alt="gallery" 
                className='mx-auto mt-5 mb-3 d-block rounded border border-dark shadow-lg p-1'
                style={imgStyle} 
            />
            <button onClick={handleBack} className='btn btn-danger mx-2 rounded border border-dark shadow-lg p-2'>back</button>
            <button onClick={handleNext} className='btn btn-success mx-2 rounded border border-dark shadow-lg p-2'>next</button>
        </div>
    );
}
