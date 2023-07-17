import { Box, Button, Card, Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';

const ShoppingItem = ({ item, onItemCompletionChange, onDeleteItem }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(item.completed || false);
  }, [item.completed]);

  const handleChange = (event) => {
    const completed = event.target.checked;
    setChecked(completed);
    onItemCompletionChange(item.id, completed);
  };

  const handleDeleteItem = () => {
    onDeleteItem(item.id);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          color: item.completed ? 'green' : 'red',
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        <Checkbox checked={checked} onChange={handleChange} />
        {item.name}
      </Box>
      <Button onClick={handleDeleteItem}>Delete Item</Button>
    </Card>
  );
};

export default ShoppingItem;
