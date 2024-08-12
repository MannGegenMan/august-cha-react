import React from 'react';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';

const Cart = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const orderData = JSON.stringify({
      items: items.map(item => ({ id: item._id, name: item.name, price: item.price })),
      total: total
    });

    if (window.Telegram.WebApp.initDataUnsafe.query_id) {
      window.Telegram.WebApp.sendData(orderData);
    } else {
      console.log('Checkout data:', orderData);
      // Здесь можно добавить логику для обработки заказа вне Telegram
    }
  };

  return (
    <div>
      <Typography variant="h6">Shopping Cart</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;