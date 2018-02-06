import { FETCH_WEATHER } from '../actions/index';

export default function(state = [] , action) {
  switch(action.type) {
    case  FETCH_WEATHER:
    //  return state.concat([action.payload.data] );
    // this two sentace is same, in the next line ,it using ES6, means
    //make a new array put action data inside of it and then take this other variable
      return[action.payload.data, ...state]; // [ city, city, city]
  }

  return state;
}
