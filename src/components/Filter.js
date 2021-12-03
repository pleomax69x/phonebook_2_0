const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          value={filter}
          onChange={handleFilter}
          placeholder="Enter name to find"
        />
      </label>
    </div>
  );
};

export default Filter;
