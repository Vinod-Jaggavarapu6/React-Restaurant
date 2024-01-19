import { formatCurrency } from "../../utils/helpers";

import PropTypes from "prop-types";
import DeleteItem from "./DeleteItem";
import { getCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        {<UpdateItemQuantity id={id} currentQuantity={currentQuantity} />}
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
