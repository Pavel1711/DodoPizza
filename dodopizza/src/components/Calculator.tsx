import React, {FC} from 'react';
import {IEntityInCart} from "../types/reducers/typesCart";
import {removeFromCart as removeFromCartAction, addToCart as addToCartAction} from "../actions/cart";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface ICalculatorProps {
  entity: IEntityInCart
}

const Calculator: FC<ICalculatorProps> = props => {
  const {entity} = props;
  const {id, title, media, sizeText} = entity
  const dispatch = useDispatch();
  const cart = useTypedSelector(state => state.cart);

  const removeFromCart = () => {
    let count: number = 1;
    let totalPrice: number = entity.totalPrice / entity.count;

    for (let item of cart.data) {
      if (sizeText && item.title === title && item.sizeText === sizeText) {
        count = item.count - count;
        totalPrice = item.totalPrice - totalPrice;
      } else if (!sizeText && item.title === title) {
        count = item.count - count;
        totalPrice = item.totalPrice - totalPrice;
      }
    }

    let data = {id, title, media, totalPrice, count, sizeText};

    if (!sizeText)
      delete data.sizeText;

    dispatch(removeFromCartAction(data))
  }

  const addToCart = () => {
    let count: number = 1;
    let totalPrice: number = entity.totalPrice / entity.count;

    for (let item of cart.data) {
      if (sizeText && item.title === title && item.sizeText === sizeText) {
        count += item.count;
        totalPrice += item.totalPrice;
      } else if (!sizeText && item.title === title) {
        count += item.count;
        totalPrice += item.totalPrice;
      }
    }

    let data = {id, title, media, totalPrice, count, sizeText};

    if (!sizeText)
      delete data.sizeText

    dispatch(addToCartAction(data, true));
  }

  return (
    <div id="calculator" className="d-flex justify-content-around">
      <span className="minus" onClick={removeFromCart}>-</span>
      <span>{entity.count}</span>
      <span className="plus" onClick={addToCart}>+</span>
    </div>
  );
};

export default Calculator;