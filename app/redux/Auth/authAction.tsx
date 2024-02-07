"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authLogin, authRegister, authSendOpt, authVerifyOpt, authForgotPassword, authResetPassword, updateProfileEndPoint, getUserProfile, updatePasswordEndPoint } from '../../constants/endPointConstant'
import { toast } from 'react-toastify';
import {getToken} from '../../(main)/utils/getToken';

// Async action for user login
export const login = createAsyncThunk(
    'auth/login',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authLogin, userData);
            const { user } = response.data
            localStorage.setItem('user', JSON.stringify(user))
            toast.success(response.data.message);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Login failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authRegister, userData); 
            // const { user } = response.data;
            // localStorage.setItem('user', JSON.stringify(user)); // Optionally store the user in localStorage
            toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Registration failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const sendOpt = createAsyncThunk(
    'auth/sendOpt',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authSendOpt, userData); 
            toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Some Error Occur Send Again");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);
export const verifyOpt = createAsyncThunk(
    'auth/verifyOpt',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authVerifyOpt, userData); 
            toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Some Error Occur");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);


export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authForgotPassword, userData); 
            // toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Some Error Occur");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authResetPassword, userData); 
            toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Some Error Occur");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);
export const updateProfile = createAsyncThunk(
    'profile/update',
    async (data: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(updateProfileEndPoint, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
        
            toast.success(response.data.message);
            return response.data.user;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Update Profile failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);
export const userProfile = createAsyncThunk(
    'user/profile',
    async (_, { rejectWithValue }) => {
        try { 
            const token = getToken(); 
            const response = await axios.get(getUserProfile, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
                })
            return response.data.user;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "User fetch failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const updatePassword = createAsyncThunk(
    'user/update/password',
    async (data: any, { rejectWithValue }) => {
        try { 
            const token = getToken(); 
            const response = await axios.post(updatePasswordEndPoint, data, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
            toast.success(response.data.message);
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Password Updated Success");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);
// You can add more async actions here like register, logout, etc.
