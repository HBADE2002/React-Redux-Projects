import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numOfIceCreams: 20
};

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
         ...state, // make a copy of the state as state can have more than one property
          numOfIceCreams: state.numOfIceCreams - 1
        };
      default:
        return state;
    }
  };
export default iceCreamReducer;