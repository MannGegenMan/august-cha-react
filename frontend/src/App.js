import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import CategoryTabs from './components/CategoryTabs';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Здесь будет логика загрузки продуктов и категорий
    // Например:
    // fetchProducts().then(setProducts);
    // fetchCategories().then(setCategories);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Здесь может быть дополнительная логика поиска
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Здесь может быть дополнительная логика фильтрации по категории
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