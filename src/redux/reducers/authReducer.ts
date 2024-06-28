import { createSlice } from "@reduxjs/toolkit"


// Define a type for the slice state
interface AuthState {
    id: string,
    email: string,
    accessToken: string,
    userName: string
}
// Define the initial state using that type
const initialState: AuthState = {
    id: '',
    email: '',
    accessToken: '',
    userName: ''
}
const authSLice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
            state.userName = action.payload.userName
        },
        removeAuth: (state) => {
            state.id = '';
            state.email = '';
            state.accessToken = '';
            state.userName = ''
        },
    },
})


export const { addAuth, removeAuth, } = authSLice.actions

export default authSLice.reducer

export const authSelector = (state: any) => state.authReducer