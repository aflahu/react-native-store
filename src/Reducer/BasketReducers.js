const INITIAL_STATE = {
  basketItems: [],
  subtotal: 0,
  shippingPrice: 0,
  coupon: '',
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
