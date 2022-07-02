const redux = require('redux');
const createStore = redux.createStore;


//*****************//Action Type//***********************//

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

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


////****************//Initial Value//****************//

const initialState = {
    numOfCakes: 100,
}
//****************//Reducers//****************//


const reducer = (state = initialState, action) => {
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

//****************//Store//****************//

const store = createStore(reducer)


// Inspect the state using store.getstate (Print Intial state value)


console.log('InitialValue', store.getState())

//****************//Listen to changes using store.subscribe (If we have any updates, then its called)//****************//


const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})


//Dispatching actions on the store using store.dispatch

//1
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))


//****************//UnSubscribe//****************//
unsubscribe()


