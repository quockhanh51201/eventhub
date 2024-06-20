import { createSlice } from "@reduxjs/toolkit"


// Define a type for the slice state
interface AuthState {
    id: string,
    email: string,
    accessToken: string
}
// Define the initial state using that type
const initialState: AuthState = {
    id: '',
    email: '',
    accessToken: ''
}
const authSLice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
        },
        removeAuth: (state) => {
            state.id = '';
            state.email = '';
            state.accessToken = '';
        },
    },
})


export const { addAuth, removeAuth, } = authSLice.actions

export default authSLice.reducer

export const authSelector = (state: any) => state.authReducer