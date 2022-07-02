import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 90,
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

export default cakeSlice.reducer

//****************//Export Actions//****************//

export const { ordered, restocked } = cakeSlice.actions
