import React, {FC} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {changeVisibilityCart} from "../actions/cart";
import {RUB_SYMBOL} from "../constants/config";
import Calculator from "./Calculator";


const ModalCart: FC = () => {
  const {visibility} = useTypedSelector(state => state.cart);
  const {data} = useTypedSelector(state => state.cart);
  const dispatch = useDispatch();

  let totalCount = 0;
  let totalSum = 0;
  for (let item of data) {
    totalCount += item.count;
    totalSum += item.totalPrice;
  }

  return createPortal(
    <div id="modalCart"
         className={`row d-flex justify-content-center align-items-center ${visibility ? 'd-block' : 'd-none'}`}>
      <div className="col-xl-4 col-md-6 col-sm-6 modal-container p-0">
        {totalCount ?
          <p className="total-sum px-3">{totalCount} товар на сумму {totalSum} {RUB_SYMBOL}</p>
          : null
        }
        <button type="button" className="btn-close" onClick={() => dispatch(changeVisibilityCart(false))}/>
        {!data.length ?
          <div className="d-flex justify-content-center align-items-center flex-column h-100">
            <img src="/cart-is-empty.svg" className="mb-4"/>
            <h4>Ой, пусто!</h4>
            <span>Ваша корзина пуста</span>
          </div>
          :
          <div className="h-100 entities">
            {data.map(entity => (
              <div className="entity d-flex flex-column bg-white p-3" key={`${entity.title}__${entity.sizeText}`}>
                <div className="d-flex">
                  <img src={entity.media} alt={entity.title}/>
                  <div className="d-flex flex-column justify-content-center">
                    <p className="title mb-0">{entity.title}</p>
                    {entity.sizeText && <p className="size-text">{entity.sizeText}</p>}
                  </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                  <span>{entity.totalPrice} {RUB_SYMBOL}</span>
                  <Calculator {...{entity}}/>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>, document.body
  )
};

export default ModalCart;