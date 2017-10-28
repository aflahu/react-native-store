import {
  SHOW_MODAL_CHANGED,
  ID_PRODUCT_CHANGED,
  COLOR_CHANGED,
  SIZE_CHANGED,
  QUANTITY_CHANGED,
  TOTAL_PRICE
} from '../Actions/type';

const INTIAL_STATE = {
  showModal: false,
  idProduct: '',
  color: '',
  size: null,
  quantity: 1,
  total: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL_CHANGED:
      return { ...state, showModal: action.payload };
    case ID_PRODUCT_CHANGED:
      return { ...state, idProduct: action.payload };
    case COLOR_CHANGED:
      return { ...state, color: action.payload };
    case SIZE_CHANGED:
      return { ...state, size: action.payload };
    case QUANTITY_CHANGED:
      return { ...state, quantity: action.payload };
    case TOTAL_PRICE:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};
