import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/contactActions";
import { getFilter } from "../redux/contactSelector";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <div>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
          placeholder="Enter name to find"
        />
      </label>
    </div>
  );
};

export default Filter;
