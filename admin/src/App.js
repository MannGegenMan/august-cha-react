import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/new" component={ProductForm} />
        <Route path="/products/edit/:id" component={ProductForm} />
        <Route exact path="/categories" component={CategoryList} />
        <Route path="/categories/new" component={CategoryForm} />
        <Route path="/categories/edit/:id" component={CategoryForm} />
      </Switch>
    </Router>
  );
}

export default App;