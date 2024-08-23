const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
 }

 function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'Second Redux Action'
    }
 }

 // reducer function ==> (prevState, action) => newState

 const initialCakeState = {
    numOfCakes: 10
 
 };
 const initialIceCreamState = {
    numOfIceCreams: 20
 
 };

 const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state, // make a copy of the state as state can have more than one property
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
 }
 const iceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state, // make a copy of the state as state can have more than one property
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
 }
 

 // reduce store
 const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
 })
 const store = createStore(rootReducer, applyMiddleware(logger));
 console.log("Initial state", store.getState());
//  const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
 const unsubscribe = store.subscribe(() => {});
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyIceCream());
 store.dispatch(buyIceCream());

 unsubscribe(); // to stop listening to the store changes
 
 
