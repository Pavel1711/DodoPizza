import React, {FC} from 'react';
import {IEntity} from '../types/types';


interface IEntityProps {
  item: IEntity
}

const Entity: FC<IEntityProps> = props => {
  const {item} = props;

  return (
    <div className="entity col-xl-3 col-md-4 d-flex flex-column justify-content-between mb-4">
      <div>
        <img src={item.media} width={250} height={250} alt={item.title} className="mb-1"/>
        <p className="title">{item.title}</p>
        <p className="composition">{item.composition}</p>
      </div>
      <p className="price">{item.price} ₽</p>
    </div>
  );
};

export default Entity;