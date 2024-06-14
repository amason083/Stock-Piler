import React from 'react';
import './SelectedImages.css';

function SelectedImages({ images, onRemove }) {
  return (
    <div>
      <h2 className='verbiage'>Selected Images</h2>
      <div className='selected-gallery-container'>
        {images.map((image, index) => (
          <div key={index} style={{ position: 'relative', display: 'inline-block', margin: '10px' }}>
            <img className='selected-image'
              src={image?.src?.large}
              alt={image?.alt || 'Image'}
            />
            <button className='removeButton'
              onClick={() => onRemove(image)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedImages;
