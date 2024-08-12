import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import CategoryTabs from './components/CategoryTabs';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('your_api_url/products');
        setProducts(productsResponse.data);

        const categoriesResponse = await axios.get('your_api_url/categories');
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our Tea Shop</h1>
        <SearchBar onSearch={handleSearch} />
        <CategoryTabs 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </header>
      <main>
        <ProductList 
          products={products}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      </main>
    </div>
  );
}

export default App;