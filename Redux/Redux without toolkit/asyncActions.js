const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios')

////****************//Initial State//****************//

const initialState = {
    loading: false,
    users:[],
    error: '',
}


//*****************//Action Type//***********************//
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


//****************//Action Creator//****************//


const fetchUsersRequest = () =>{
    return {
        type:FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = (error) =>{
    return {
        type:FETCH_USERS_FAILED,
        payload: error,
    }
}


//****************//Reducers//****************//

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}


//****************//Asynch Action//****************//


const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())    ////First Request
        axios.get('https://ghibliapi.herokuapp.com/films').then((response) => {
            const users = response.data.map((user) => user.director)
            dispatch(fetchUsersSuccess(users))      ////Second Request
        })
        .catch((error) => {
            dispatch(fetchUsersFailure(error.message))    ////
        })
    }
}

//****************//Store//Middleware****************//

const store = createStore(reducer, applyMiddleware(thunkMiddleware))


//****************//Listener(If we have any updates, then its called)//****************//


store.subscribe(() => { console.log(store.getState())})


//****************//Dispatch//****************//

store.dispatch(fetchUsers())