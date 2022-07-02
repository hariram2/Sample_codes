
//****************************Using Middleware****************************//

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//*****************//Action Type//***********************//

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

//****************//Action Creator//****************//
//1
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
//2
function orderIcecream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function restockIcecream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

////****************//Initial Value//****************//
//1
const initialcakeState = {
    numOfCakes: 100,
}
//2
const initialIceCreamState = {
    numOfIcecream: 40,
}

 
//****************//Reducers//****************//

//.........1...........//

const cakeReducer = (state = initialcakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
            default:
                return state
    }
}
//2
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload,
            }
            default:
                return state
    }
}

//****************//Combining Reducers//****************//

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})


//****************//Store//Middleware//****************//



const store = createStore(rootReducer, applyMiddleware(logger))
console.log('InitialValue', store.getState())


//****************//Listener//****************//

const unsubscribe = store.subscribe(() => {})

//****************//Dispatch//****************//
//1

store.dispatch(orderCake())
store.dispatch(restockCake(3))

//2

store.dispatch(orderIcecream())
store.dispatch(restockIcecream(9))


//****************//UnSubscribe//****************//
unsubscribe()


