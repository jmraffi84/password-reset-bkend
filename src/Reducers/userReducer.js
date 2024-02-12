// src / Reducers/userReducer.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newUser, authenticate, verify, forget_password, reset_password, resetPasswordToken, resetPasswordApi } from "../Api/userApi";


export const signUpAsync = createAsyncThunk('user/signUp', async ({ email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(signUpAsync);
        const response = await newUser(email, password, config);
        console.log('API Response newUser:', response);
        return response;
    } catch (error) {
        return rejectWithValue({ errorMessage: error.message });
    }
})

const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        data: { email: "", password: "" },
        // status: 'idle',
        // userInfo: null,
        // userToken: null, // for storing the JWT
        // error: null,
        // success: false,
    },
    reducers: {
        signup: (state, action) => {
            state.data = action.payload
        },
    },
})

// forget password setup
export const forgetPasswordAsync = createAsyncThunk('user/forget-password', async ({ email }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(forgetPasswordAsync);
        const response = await forget_password(email, config);
        console.log('API Response forget_password :', response);
        return response;
    } catch (error) {
        return rejectWithValue({ errorMessage: error.message });
    }
})

const forgetPaswordSlice = createSlice({
    name: 'userEmail',
    initialState: {
        data: { email: "" },

    },
    reducers: {
        forgetpassword: (state, action) => {
            state.data = action.payload
        },
    },


})



// password reset setup
export const passwordResetAsync = createAsyncThunk('passwordReset/reset-password', async ({ password, token }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(passwordResetAsync);
        const response = await reset_password({ password, token }, config);
        console.log('API Response reset_password  :', response);
        return response;
    } catch (error) {
        return rejectWithValue({ errorMessage: error.message });
    }
})

const passwordResetSlice = createSlice({
    name: 'userPasswordReset',
    initialState: {
        data: { token: "", password: "" },
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        changePassword: (state, action) => {
            console.log("Action:", action.payload);
            console.log("state:", state);
            state.data = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(passwordResetAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(passwordResetAsync.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(passwordResetAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    },

})
// end password reset setup

// new hold
// export const resetPassword = createAsyncThunk(
//     'passwordReset/resetPassword',
//     async ({ token, password }, thunkAPI) => {
//         try {
//             const response = await resetPasswordApi({ token, password });
//             return response;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Create password reset slice
// const newPasswordSlice = createSlice({
//     name: 'passwordReset',
//     initialState: {
//         loading: false,
//         error: null,
//         success: false,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(resetPassword.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//                 state.success = false;
//             })
//             .addCase(resetPassword.fulfilled, (state) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.success = true;
//             })
//             .addCase(resetPassword.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.success = false;
//             });
//     },
// });




export const { signup, forgetpassword, changePassword } = userSlice.actions;
export default userSlice.reducer;


