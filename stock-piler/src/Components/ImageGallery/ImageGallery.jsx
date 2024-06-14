
import React from 'react';
import './ImageGallery.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <div className='image-gallery-container'>
      {images.map(image => (
        <img className="image-item"
          key={image.id}
          src={image?.src?.large}
          alt={image?.alt || 'Image'}
          onClick={() => onImageClick(image)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
