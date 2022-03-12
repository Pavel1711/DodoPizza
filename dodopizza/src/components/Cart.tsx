import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {changeVisibilityCart} from "../actions/cart";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Cart: FC = () => {
  const {data} = useTypedSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <button type="button" className="btn text-white" id="add-to-cart"
            onClick={() => dispatch(changeVisibilityCart(true))}>
      Корзина {data.length ? `| ${data.length}` : null}
    </button>
  );
};

export default Cart;