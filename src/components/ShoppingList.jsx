import { Box, TextField, Button, Card, Typography } from '@mui/material';

const ShoppingList = ({ list, setAllShoppingLists, allShoppingLists }) => {
  const handleDeleteOneList = () => {
    const filteredList = allShoppingLists.filter(
      (oneList) => oneList.id !== list.id
    );
    setAllShoppingLists(filteredList);
  };

  //vytvorit state na zachytenie itemu, vytvorit funkciu na add item, allshoppinglist.map najst objekt a donho vlozit

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box>
        <TextField variant='outlined' label='Name of the item' />
        <Button>Add item</Button>
      </Box>
      <Box>
        <Typography variant='h5'>{list.name}</Typography>
        <Typography>{list.date}</Typography>
      </Box>
      <Button onClick={handleDeleteOneList}>Delete List</Button>
    </Card>
  );
};

export default ShoppingList;
