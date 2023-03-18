// destructure the organisations and handleChange prop values from the prop object
export const Select = ({ organisations, handleChange }) => {
  return (
    <select
      className="form-select my-4"
      // connect the onChange event handler to the handleChange function
      onChange={handleChange}
      defaultValue=""
    >
      <option value="" disabled>
        Select an organisation
      </option>
      {/* map over the organisations array to render an option for each organisation */}
      {organisations.map((organisation) => (
        <option
          // each organisation value
          value={organisation}
          // use the organisation as the key prop
          key={organisation}
        >
          {/* each organisation value */}
          {organisation}
        </option>
      ))}
    </select>
  );
};
