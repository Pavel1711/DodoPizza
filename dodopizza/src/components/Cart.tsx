import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {changeVisibilityCart} from "../actions/cart";
import {useTypedSelector} from "../hooks/useTypedSelector";


const Cart: FC = () => {
  const {data} = useTypedSelector(state => state.cart);
  const dispatch = useDispatch();

  let totalCount = 0;
  for (let item of data)
    totalCount += item.count;

  return (
    <button type="button" className="btn text-white" id="add-to-cart"
            onClick={() => dispatch(changeVisibilityCart(true))}>
      Корзина {data.length ? `| ${totalCount}` : null}
    </button>
  );
};

export default Cart;