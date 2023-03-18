// destructure the items prop value from the prop object
export const ShoppingList = ({ items }) => {
  return (
    <section className="my-4">
      {/* use the logical AND (&&) operator to render the error message if items is an empty array */}
      {items.length === 0 && (
        <div className="alert alert-primary" role="alert">
          You have no items in your shopping list. Please use the form above to
          add items to your shopping list.
        </div>
      )}

      {/* use the logical AND (&&) operator to render the items list if items is not empty array */}
      {items.length !== 0 && (
        <div className="bg-light">
          <h2 className="text-center p-4">Shopping List</h2>
          <ul className="list-group p-4">
            {/* iterate over each item in the items array to render a list item */}
            {items.map((item) => (
              <li
                className="list-group-item"
                // use the m id as the key prop
                key={item.id}
              >
                {/* render the item label */}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
