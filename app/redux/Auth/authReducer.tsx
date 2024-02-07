"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register, sendOpt, verifyOpt, forgotPassword, resetPassword,updateProfile, userProfile } from './authAction'

const initialState = {
  isLoggedIn: false,
  user: null,
  userProfileData: {},
  loading: false,
  error: null,
  isRegistered: false,
  success: false,
  isVerified: false,
  isMailSend: false,
  registrationErrors: {
    email: null,
    username: null,
    password: null,
    confirmPassword: null
  },
  loginErrors: {
    email: null,
    password: null
  },
  forgotErrors : {
    email : null
  },
  resetErrors: {
    password: null,
    confirmPassword: null
  },
  verifyErrors : {
    code : null
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.loginErrors = {
          email: null,
          password: null,

        };
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && (action.payload as any).message) {
        state.loginErrors = {
          email: (action.payload as any).message === 'user not found' || (action.payload as any).message === 'invalid email format' || (action.payload as any).message === 'email is required' || (action.payload as any).message === 'blocked by admin' ? (action.payload as any).message : null,
          password: (action.payload as any).message === 'incorrect password' || (action.payload as any).message === 'password is required' ? (action.payload as any).message : null,
        }
      } else {
        state.loginErrors = {
          email: null,
          password: null,
        };
      }
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.registrationErrors = {
          email: null,
          username: null,
          password: null,
          confirmPassword: null
        };
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && (action.payload as any).message) {
         
          state.registrationErrors = {
            
            email: (action.payload as any).message === 'email already taken' || (action.payload as any).message === 'invalid email format' || (action.payload as any).message === 'email is required' ? (action.payload as any).message : null,
            username: (action.payload as any).message === 'username is not available' || (action.payload as any).message === 'username is required' ? (action.payload as any).message : null,
            password: (action.payload as any).message === 'password is required' || (action.payload as any).message === 'password is required' ? (action.payload as any).message : null,
            confirmPassword: (action.payload as any).message === 'password does not match' ? (action.payload as any).message : null
          };
        } else {
          state.registrationErrors = {
            email: null,
            username: null,
            password: null,
            confirmPassword: null
          };
        }
      })
      .addCase(sendOpt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOpt.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendOpt.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload; 
      })
      .addCase(verifyOpt.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verifyErrors = {
          code: null,
        };
      })
      .addCase(verifyOpt.fulfilled, (state, action) => {
        state.loading = false;
        state.isVerified = true;
        state.error = null;
      })
      .addCase(verifyOpt.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && (action.payload as any).message) {
          state.verifyErrors = {
            code: (action.payload as any).message === 'invalid OTP code' ? (action.payload as any).message : null,
          }
        } else {
          state.verifyErrors = {
            code: null,
          };
        }
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotErrors = {
          email: null,
        };
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isMailSend = true
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && (action.payload as any).message) {
          state.forgotErrors = {
            email: (action.payload as any).message === 'invalid email format' || (action.payload as any).message === 'user not found' ? (action.payload as any).message : null,
          }
        } else {
          state.forgotErrors = {
            email: null,
          };
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.resetErrors = {
          password: null,
          confirmPassword: null
        };
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        if (action.payload && (action.payload as any).message) {
          state.resetErrors = {
            password: (action.payload as any).message === 'password is required' ? (action.payload as any).message : null,
            confirmPassword: (action.payload as any).message === 'password does not match' ? (action.payload as any).message : null
          };
        } else {
          state.resetErrors = {
            password: null,
            confirmPassword: null
          };
        }
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userProfileData = action.payload
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.loading = false;
      })
  },

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;