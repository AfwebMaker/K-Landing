import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginHandler: (state, action) => {
        },
        logoutHandler: (state) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const {
    loginHandler,
    logoutHandler
} = loginSlice.actions

export default loginSlice.reducer