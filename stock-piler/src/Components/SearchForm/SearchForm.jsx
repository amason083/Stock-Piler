import React, { useState } from 'react';
import './SearchForm.css'

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className='search-form'>
        <h2>Stock-Piler</h2>
        <form action='#' method='GET' onSubmit={handleSubmit}>
        <div className='form-row'>
            <label>
                <input type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for images..."
                required/>
            </label>
        </div>
        <div className='form-row'>
            <button type="submit">Search</button>
        </div>
        </form>
    </section>
  );
}

export default SearchForm;
