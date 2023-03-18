// import useState and useEffect hooks from React
import { useEffect, useState } from "react";

// 3rd party package from https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

import { Banner } from "./components/Banner";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable items and set the default value as undefined
  const [items, setItems] = useState();

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

    // create a new item object with a label and a unique id
    const itemToAdd = { label, id: uuidv4() };

    // create a new array with all the previous items and the new item
    const newItems = [...itemsFromLS, itemToAdd];

    // write to local storage the stringified version of newItems
    localStorage.setItem("shoppingItems", JSON.stringify(newItems));

    // the setter function from useState for items is used to change the state of items to the newItems
    setItems(newItems);
  };

  return (
    <div className="container">
      <Banner />

      <ShoppingListForm
        // pass the addItem function as a prop
        addItem={addItem}
      />

      {/* use the logical AND (&&) operator to render the ShoppingList component if items is truthy */}
      {items && <ShoppingList items={items} />}
    </div>
  );
};
