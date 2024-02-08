import React from 'react';
import ProductList from './Productlist';

function Search() {
  const handleSearch = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(console.log);
  };

  return (
    <div>
      <h2>Search</h2>
      <button onClick={handleSearch}>Search</button>
      <ProductList />
    </div>
  );
}

export default Search;