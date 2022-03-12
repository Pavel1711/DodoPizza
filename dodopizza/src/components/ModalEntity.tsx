import React, {FC, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {clearEntity, changeSize} from "../actions/entity";
import {addToCart as addToCartAction} from "../actions/cart";
import {RUB_SYMBOL} from "../constants/config";


const ModalEntity: FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const {id, title, composition, size, price, media} = useTypedSelector(state => state.entity)

  const dispatch = useDispatch()

  useEffect(() => {
    setVisibleModal(!!id && !!size?.length);
  }, [id]);

  const closeModal = () => {
    setVisibleModal(false);
    dispatch(clearEntity())
  }

  const changeSizeEntity = (newPrice: number) => {
    dispatch(changeSize(newPrice))
  }

  const addToCart = () => {
    if (size) {
      for (let item of size) {
        if (item.price === price) {
          const data = {
            id,
            title,
            media,
            price,
            sizeText: item.name
          }
          dispatch(addToCartAction(data));
          closeModal();
          break;
        }
      }
    }
  }

  return createPortal(
    <div id="modalEntity"
         className={`row d-flex justify-content-center align-items-center ${visibleModal ? 'd-block' : 'd-none'}`}>
      <div className="col-xl-8 col-md-10 col-sm-10 bg-white modal-container">
        <button type="button" className="btn-close" onClick={closeModal}/>
        <div className="row h-100">
          <div className="col-xl-7 d-flex justify-content-center align-items-center modal-container__entity-media">
            <img src={media} alt={title}/>
          </div>
          <div className="col-xl-5 bg-light modal-container__entity-info d-flex flex-column justify-content-between">
            <div>
              <p>{title}</p>
              <p className="composition">{composition}</p>
              <div className="check-size-container d-flex justify-content-around align-items-center">
                {size?.map((item, key) => (
                  <span key={key} className={item.price === price ? "active" : ""}
                        onClick={() => changeSizeEntity(item.price)}>{item.name}</span>
                ))}
              </div>
            </div>
            <button type="button" className="btn text-white w-100 mt-4 mb-4" id="add-to-cart-modal"
                    onClick={addToCart}>
              {`Добавить в корзину за ${price} ${RUB_SYMBOL}`}
            </button>
          </div>
        </div>
      </div>
    </div>, document.body
  )
};

export default ModalEntity;