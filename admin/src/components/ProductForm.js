import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ProductForm = ({ productId = null }) => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', category: '', imageUrl: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProduct = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productId) {
        await axios.put(`http://localhost:3000/api/products/${productId}`, product);
      } else {
        await axios.post('http://localhost:3000/api/products', product);
      }
      // Handle success (e.g., show a success message, redirect)
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="name" label="Name" value={product.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField name="description" label="Description" value={product.description} onChange={handleChange} fullWidth margin="normal" multiline rows={4} />
      <TextField name="price" label="Price" type="number" value={product.price} onChange={handleChange} fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select name="category" value={product.category} onChange={handleChange}>
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField name="imageUrl" label="Image URL" value={product.imageUrl} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        {productId ? 'Update Product' : 'Create Product'}
      </Button>
    </form>
  );
};

export default ProductForm;