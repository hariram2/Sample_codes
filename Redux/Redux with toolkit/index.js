const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers  //Async Thunk


// Inspect the state using store.getstate (Print Intial state value)
console.log('Initial state', store.getState())

//Listen to changes using store.subscribe
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
})


store.dispatch(fetchUsers())    


//Dispatching actions on the store using store.dispatch

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(5))

// unsubscribe()



