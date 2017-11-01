import {
  SHOW_MODAL_CHANGED,
  ID_PRODUCT_CHANGED,
  COLOR_CHANGED,
  SIZE_CHANGED,
  QUANTITY_CHANGED,
  TOTAL_PRICE_CHANGED,
  RESET_FORM
} from './type';

export const showModalChanged = boolean => {
  return {
    type: SHOW_MODAL_CHANGED,
    payload: boolean
  };
};

export const idProductChanged = text => {
  return {
    type: ID_PRODUCT_CHANGED,
    payload: text
  };
};

export const colorChanged = text => {
  return {
    type: COLOR_CHANGED,
    payload: text
  };
};

export const sizeChanged = text => {
  return {
    type: SIZE_CHANGED,
    payload: text
  };
};

export const quantityChanged = number => {
  return {
    type: QUANTITY_CHANGED,
    payload: number
  };
};

export const totalPrice = (price, quantity) => {
  return {
    type: TOTAL_PRICE_CHANGED,
    payload: price * quantity
  };
};

export const resetForm = () => {
  return dispatch => {
    dispatch({ type: RESET_FORM });
  };
};
