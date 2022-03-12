import React, {FC} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {changeVisibilityCart} from "../actions/cart";
import {RUB_SYMBOL} from "../constants/config";


const ModalCart: FC = () => {
  const {visibility} = useTypedSelector(state => state.cart);
  const {data} = useTypedSelector(state => state.cart);
  const dispatch = useDispatch();

  let totalSum = 0;
  data.map(item => totalSum += item.price * (item.count || 1))

  return createPortal(
    <div id="modalCart"
         className={`row d-flex justify-content-center align-items-center ${visibility ? 'd-block' : 'd-none'}`}>
      <div className="col-xl-4 col-md-10 col-sm-10 modal-container p-0">
        <p className="total-sum px-3">{data.length} товар на сумму {totalSum} {RUB_SYMBOL}</p>
        <button type="button" className="btn-close" onClick={() => dispatch(changeVisibilityCart(false))}/>
        <div className="h-100 entities">
          {data.map(entity => (
            <div className="entity d-flex flex-column bg-white p-3">
              <div className="d-flex">
                <img src={entity.media} alt={entity.title}/>
                <div className="d-flex flex-column justify-content-center">
                  <p className="title mb-0">{entity.title}</p>
                  {entity.sizeText && <p className="size-text">{entity.sizeText}</p>}
                </div>
              </div>
              <hr/>
              <span>{entity.price} {RUB_SYMBOL}</span>
            </div>
          ))}
        </div>
      </div>
    </div>, document.body
  )
};

export default ModalCart;