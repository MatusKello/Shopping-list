import { useState } from 'react';
import ShoppingList from '../components/ShoppingList';
import AddShoppingList from '../components/AddShoppingList';

const ShoppingListContainer = () => {
  const [allShoppingLists, setAllShoppingLists] = useState([]);

  // shopping list array - objekt -meno datum id allShopping lists([])

  return (
    <>
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
    </>
  );
};

export default ShoppingListContainer;
