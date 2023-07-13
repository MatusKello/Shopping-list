import { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingList from '../components/AddShoppingList';
import { Box } from '@mui/material';

const ShoppingListContainer = () => {
  const [allShoppingLists, setAllShoppingLists] = useState([]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
        flexGrow: 1,
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <AddShoppingList
        allShoppingLists={allShoppingLists}
        setAllShoppingLists={setAllShoppingLists}
      />
      {allShoppingLists.map((list) => (
        <ShoppingList
          key={list.id}
          list={list}
          setAllShoppingLists={setAllShoppingLists}
          allShoppingLists={allShoppingLists}
        />
      ))}
    </Box>
  );
};

export default ShoppingListContainer;
