import { Box, TextField, Button, Card } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { capitalizeFirstLetter, formatDate } from '../utils/helpers';

const AddShoppingList = ({ allShoppingLists, setAllShoppingLists }) => {
  const [shoppingListName, setShoppingListName] = useState('');
  const [toDate, setToDate] = useState();

  const handleCreateShoppingList = () => {
    const shoppingList = {
      name: capitalizeFirstLetter(shoppingListName),
      date: toDate ? formatDate(toDate) : 'date not provided',
      id: uuidv4(),
      shoppingItems: [],
    };
    setAllShoppingLists([...allShoppingLists, shoppingList]);
    setShoppingListName('');
    setToDate('');
  };

  const handleResetAll = () => {
    setAllShoppingLists([]);
  };

  return (
    <Card
      sx={{
        background: (theme) => theme.palette.secondary.main,
        margin: '0.5rem',
        padding: '1rem',
      }}
    >
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
          <TextField
            required
            type='date'
            onChange={(e) => setToDate(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            width: '100%',
          }}
        >
          <Button
            onClick={handleResetAll}
            variant='outlined'
            disabled={allShoppingLists.length === 0}
          >
            Reset All lists
          </Button>
          <Button variant='contained' onClick={handleCreateShoppingList}>
            Add shopping list
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default AddShoppingList;
