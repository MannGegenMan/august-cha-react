import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import CategoryTabs from './components/CategoryTabs';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch products and categories from API
    // This is where you'd make API calls to your backend
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Container>
      <Box mb={2}>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Box mb={2}>
        <CategoryTabs 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </Box>
      <Box mb={2}>
        <ProductList 
          products={products}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart}
        />
      </Box>
      <Box>
        <Cart items={cartItems} />
      </Box>
    </Container>
  );
}

export default App;
