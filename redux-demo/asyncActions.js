// 1. state 2. actions 3. reducers

const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").thunk;
const axios = require("axios");
// 1. state
const initialState = {
  loading: false,
  users: [],
  errors: "",
};

// 2. actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// 2.1 action creators

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// 3. reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errors: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        errors: action.payload,
      };
    default:
      return state;
  }
};
// thunk middleware helps to return a function rather than an action object when calling an action
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
             // response.data is the array of users
             const users = response.data.map(user => user.id);
             dispatch(fetchUsersSuccess(users));
         })
         .catch(error => {
            // error.message is the error desciption
            dispatch(fetchUsersFailure(error.message));
         })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware) );
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());