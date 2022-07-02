const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10,
}


//***Create a feature slice using the create slice function which generates the actions and reducers***//

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {                                           // Its Performs direct mutations on
        ordered: (state) => {                             // the state and that is completely ok
            state.numOfCakes--                            // with Immer library(nested state updates) being used
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
    
})

//****************//Export Reducers//****************//

module.exports = cakeSlice.reducer

//****************//Export Actions//****************//

module.exports.cakeActions = cakeSlice.actions