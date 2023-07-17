import { Box, TextField, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ShoppingItem from './ShoppingItem';
import { capitalizeFirstLetter } from '../utils/helpers';

const ShoppingList = ({
  list,
  setAllShoppingLists,
  allShoppingLists,
  updateItemCompletion,
}) => {
  const [item, setItem] = useState('');

  const handleDeleteOneList = () => {
    const filteredList = allShoppingLists.filter(
      (oneList) => oneList.id !== list.id
    );
    setAllShoppingLists(filteredList);
  };

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      name: capitalizeFirstLetter(item),
    };
    const updatedShoppingLists = allShoppingLists.map((oneList) => {
      if (oneList.id === list.id) {
        const updatedItems = [...oneList.shoppingItems, newItem];
        return { ...oneList, shoppingItems: updatedItems };
      }
      return oneList;
    });
    setAllShoppingLists(updatedShoppingLists);
    setItem('');
  };

  const handleItemCompletionChange = (itemId, completed) => {
    updateItemCompletion(list.id, itemId, completed);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = list.shoppingItems.filter(
      (item) => item.id !== itemId
    );
    const updatedShoppingLists = allShoppingLists.map((oneList) => {
      if (oneList.id === list.id) {
        return { ...oneList, shoppingItems: updatedItems };
      }
      return oneList;
    });
    setAllShoppingLists(updatedShoppingLists);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        background: (theme) => theme.palette.secondary.main,
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
        <TextField
          variant='outlined'
          label='Name of the item'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button onClick={handleAddItem}>Add item</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          margin: '1rem',
        }}
      >
        <Typography variant='h5'>{list.name}</Typography>
        <Typography sx={{ fontFamily: 'cursive' }}>{list.date}</Typography>
      </Box>
      {list.shoppingItems.map((item) => (
        <ShoppingItem
          onItemCompletionChange={handleItemCompletionChange}
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
        />
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{ marginTop: '0.5rem' }}
          variant='contained'
          onClick={handleDeleteOneList}
        >
          Delete List
        </Button>
      </Box>
    </Card>
  );
};

export default ShoppingList;
