import React, { useState } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm/SearchForm';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import SelectedImages from './Components/SelectedImages/SelectedImages';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const API_KEY = '3tkRQSbHBs0k7ogG6DVz4C0i0Z5Y1t3L1QLm5GHxN4Y501CdBz5hZLKT';

  const fetchPexelsImages = async (query) => {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=20`;
    setLoading(true);

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY
        }
      });

      const data = await response.json();
      setImages(data.photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImages((prev) => [...prev, image]);
  };

  const toggleView = () => {
    setShowSelected((prev) => !prev);
  }; 

  const handleImageRemove = (image) => {
    setSelectedImages((prev) => prev.filter((img) => img.id !== image.id));
  };

  return (
    <div className="App">
      <main>
        <div className='form'>
            <SearchForm onSearch={fetchPexelsImages} />
            {loading && <p>Loading...</p>}
        </div>
        <button className='Toggle' onClick={toggleView}>
          {showSelected ? 'Show All Results' : 'Show Selected Images'}
        </button>
        {showSelected ? (
          <SelectedImages images={selectedImages} onRemove={handleImageRemove} />
        ) : (
          <ImageGallery images={images} onImageClick={handleImageClick} />
        )}
      </main>
    </div>
  );
}

export default App;
