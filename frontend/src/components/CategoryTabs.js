import React from 'react';
import { Tabs, Tab } from '@mui/material';

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleChange = (event, newValue) => {
    onSelectCategory(newValue);
  };

  return (
    <Tabs
      value={selectedCategory}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {categories.map((category) => (
        <Tab key={category._id} label={category.name} value={category._id} />
      ))}
    </Tabs>
  );
};

export default CategoryTabs;