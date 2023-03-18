// destructure the organisations and handleOrgClick prop values from the prop object
export const Organisations = ({ organisations, handleOrgClick }) => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly my-4">
      {/* map over the organisations array to render a button for each organisation */}
      {organisations.map((organisation) => (
        <button
          className="btn btn-info m-2"
          type="button"
          // connect the onClick event handler to the handleOrgClick function
          onClick={handleOrgClick}
          // use the organisation as the name attribute
          name={organisation}
          // use the organisation as the key prop
          key={organisation}
        >
          {/* each organisation value */}
          {organisation}
        </button>
      ))}
    </div>
  );
};
