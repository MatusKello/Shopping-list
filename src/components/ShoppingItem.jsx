import { Box, Button, Card, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const ShoppingItem = ({ item, onItemCompletionChange, onDeleteItem }) => {
  const [checked, setChecked] = useState(false);

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
      <Box>
        <FormControlLabel
          sx={{
            color: item.completed ? 'green' : 'red',
            textDecoration: item.completed ? 'line-through' : 'none',
          }}
          control={
            <Checkbox
              checked={checked}
              onChange={(event) => handleChange(event)}
            />
          }
          label={item.name}
        />
      </Box>
      <Button variant='contained' onClick={handleDeleteItem}>
        Delete Item
      </Button>
    </Card>
  );
};

export default ShoppingItem;
