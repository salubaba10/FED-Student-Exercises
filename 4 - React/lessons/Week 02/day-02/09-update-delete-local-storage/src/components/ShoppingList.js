// destructure the items, clearList, handleOpen and removeItem prop value from the prop object
export const ShoppingList = ({ items, clearList, handleOpen, removeItem }) => {
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
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              className="btn btn-danger"
              type="button"
              onClick={clearList}
            >
              Clear list
            </button>
          </div>
          <ul className="list-group p-4">
            {/* iterate over each item in the items array to render a list item */}
            {items.map((item) => (
              <li
                className="list-group-item"
                // use the m id as the key prop
                key={item.id}
              >
                <div className="d-flex justify-content-between">
                  <div>{item.label}</div>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-warning"
                      // connect the onClick event handler to the handleOpen function
                      onClick={() => handleOpen(item)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      // connect the onClick event handler to the removeItem function
                      onClick={() => removeItem(item)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
