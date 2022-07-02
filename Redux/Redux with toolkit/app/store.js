const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')


//******create the store using configuring store ********************/

const store = configureStore({
    reducer: {                                                      // Attaching the reducer
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
})

module.exports = store