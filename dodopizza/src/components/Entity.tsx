import React, {FC} from 'react';
import {IEntity} from '../types/types';
import {useDispatch} from "react-redux";
import {getEntity} from "../actions/entity";
import {RUB_SYMBOL} from "../constants/config";
import {addToCart as addToCartAction} from "../actions/cart";


interface IEntityProps {
  item: IEntity,
  model: string
}

const Entity: FC<IEntityProps> = props => {
  const {item, model} = props;
  const {id, title, media, price} = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (item.size?.length > 1)
      dispatch(getEntity(item.id, model))
    else {
      const data = {id, title, media, totalPrice: price, count: 1};
      dispatch(addToCartAction(data, false));
    }
  }

  return (
    <div className="entity col-xl-3 col-md-4 col-sm-6 d-flex flex-column justify-content-between mb-4">
      <div>
        <img src={item.media} width={250} height={250} alt={item.title} className="mb-1"/>
        <p className="title">{item.title}</p>
        <p className="composition">{item.composition}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="price">{item.price} {RUB_SYMBOL}</span>
        <button type="button" className="btn" onClick={handleClick}>
          {item.size?.length > 1 ? 'Выбрать' : 'В корзину'}
        </button>
      </div>
    </div>
  );
};

export default Entity;