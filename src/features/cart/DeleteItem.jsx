import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import PropTypes from "prop-types";
function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
}
DeleteItem.propTypes = {
  id: PropTypes.number,
};

export default DeleteItem;
