// import useState and useEffect hooks from React
import { useEffect, useState } from "react";

// 3rd party package from https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

import { Banner } from "./components/Banner";
import { EditModal } from "./components/EditModal";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable items and set the default value as undefined
  const [items, setItems] = useState();

  // declare a state variable itemToEdit and set the default value as undefined
  const [itemToEdit, setItemToEdit] = useState();

  // declare a state variable showModal and set the default value as false
  const [showModal, setShowModal] = useState(false);

  // useEffect hook expects a callback function which it will execute every time something in the list of its dependencies changes. The list of dependencies contains items which means the callback function will every time items changes
  useEffect(() => {
    // check if items is undefined
    if (!items) {
      // if items is undefined then get items from local storage by passing the key of shoppingItems else set it to an empty array
      const itemsFromLS = getFromLocalStorage("shoppingItems", []);

      // the setter function from useState for items is used to change the state of items to the items from local storage
      setItems(itemsFromLS);
    }
  }, [items]);

  // function to execute when you want to add a new item
  const addItem = (label) => {
    // get all previous items from local storage
    const itemsFromLS = getFromLocalStorage("shoppingItems", []);

    // create a new item object with label and a unique id
    const itemToAdd = { label, id: uuidv4() };

    // create a new array with all the previous items and the new item
    const newItems = [...itemsFromLS, itemToAdd];

    // write to local storage the stringified version of newItems
    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    // the setter function from useState for items is used to change the state of items to the newItems
    setItems(newItems);
  };

  // function to execute when you want to remove an item from the list
  const removeItem = (item) => {
    // get all previous items from local storage
    const itemsFromLS = getFromLocalStorage("shoppingItems", []);

    // filter the items to remove the item based on item id
    const newItems = itemsFromLS.filter(
      (itemFromLS) => itemFromLS.id !== item.id
    );

    // write to local storage the stringified version of newItems
    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    // the setter function from useState for items is used to change the state of items to the newItems
    setItems(newItems);
  };

  // function to execute when you want to edit an item
  const editItem = (editedItem) => {
    // go over each item in the items array
    const newItems = items.map((item) => {
      // if the current item matches the item to edit
      if (item.id === editedItem.id) {
        // return the new edited item instead of the previous item
        return editedItem;
      }

      // return the current item
      return item;
    });

    // write to local storage the stringified version of newItems
    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    // the setter function from useState for items is used to change the state of items to the newItems
    setItems(newItems);
  };

  // function to execute when you want to clear list
  const clearList = () => {
    // remove the items from local storage
    localStorage.removeItem("shoppingItems");

    // the setter function from useState for items is used to change the state of items to []
    setItems([]);
  };

  // handler function when you click on edit item button
  const handleOpen = (item) => {
    // change the state of itemToEdit to the item you clicked on
    setItemToEdit(item);

    // change the state of showModal to true to show modal
    setShowModal(true);
  };

  // handler function when you click on modal close
  const handleClose = () => {
    // clear the state of itemToEdit on modal close
    setItemToEdit();

    // change the state of showModal to false to hide modal
    setShowModal(false);
  };

  return (
    <div className="container">
      <Banner />

      <ShoppingListForm
        // pass the addItem function as a prop
        addItem={addItem}
      />

      {/* use the logical AND (&&) operator to render the ShoppingList component if items is truthy */}
      {items && (
        <ShoppingList
          items={items}
          // pass the clearList function as a prop
          clearList={clearList}
          // pass the removeItem function as a prop
          removeItem={removeItem}
          // pass the handleOpen function as a prop
          handleOpen={handleOpen}
        />
      )}

      {/* use the logical AND (&&) operator to render the EditModal component if itemToEdit is truthy */}
      {itemToEdit && (
        <EditModal
          // pass the showModal as a prop
          show={showModal}
          // pass the itemToEdit as a prop
          item={itemToEdit}
          // pass the editItem as a prop
          editItem={editItem}
          // pass the handleClose function as a prop
          handleClose={handleClose}
        />
      )}
    </div>
  );
};
