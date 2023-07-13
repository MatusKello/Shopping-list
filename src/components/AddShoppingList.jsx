import { Box, TextField, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddShoppingList = ({ allShoppingLists, setAllShoppingLists }) => {
  const [shoppingListName, setShoppingListName] = useState('');
  const [toDate, setToDate] = useState();

  const handleCreateShoppingList = () => {
    const shoppingList = {
      name: shoppingListName,
      date: toDate,
      id: uuidv4(),
      shoppingItems: [],
    };
    setAllShoppingLists([...allShoppingLists, shoppingList]);
    setShoppingListName('');
    setToDate('');
  };

  return (
    <Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <TextField
            value={shoppingListName}
            variant='outlined'
            label='Shopping list name'
            onChange={(e) => setShoppingListName(e.target.value)}
          />
          <TextField type='date' onChange={(e) => setToDate(e.target.value)} />
        </Box>
        <Button onClick={handleCreateShoppingList} sx={{ marginTop: '2rem' }}>
          Add shopping list
        </Button>
      </Box>
    </Card>
  );
};

export default AddShoppingList;
