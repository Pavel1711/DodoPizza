import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";


const Modal = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const {id, title, composition, price, media} = useTypedSelector(state => state.entity)

  useEffect(() => {
    setVisibleModal(!!id);
  }, [id]);

  return createPortal(
    <div id="modal" className={`row d-flex justify-content-center align-items-center ${visibleModal ? 'd-block' : 'd-none'}`}>
      <div className="col-xl-7 bg-white modal-container">
        <button type="button" className="btn-close" onClick={() => setVisibleModal(false)}/>
        <div className="row h-100">
          <div className="col-xl-7 d-flex justify-content-center align-items-center modal-container__entity-media">
            <img src={media} alt={title}/>
          </div>
          <div className="col-xl-5 bg-light modal-container__entity-info">
            <p>{title}</p>
            <div className="check-size-container d-flex justify-content-around align-items-center">
              <span>Маленькая</span>
              <span className="active">Средняя</span>
              <span>Большая</span>
            </div>
          </div>
        </div>
      </div>
    </div> ,document.body
  )
};

export default Modal;