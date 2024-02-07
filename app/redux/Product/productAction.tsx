"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showProductEndPoint, updateWishlistEndPoint, allUserWishlistEndPoint} from '../../constants/endPointConstant'
import { toast } from 'react-toastify';
import {getToken} from '../../(main)/utils/getToken';



export const showProducts = createAsyncThunk(
    'product/all',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(showProductEndPoint)
            return response.data.products;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Products fetch failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);
export const updateWishlistProduct = createAsyncThunk(
    'wishlist/update',
    async (data: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(updateWishlistEndPoint, data, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
        
            toast.success(response.data.message);
            return response.data.wishlist;
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

export const userWishlistProduct = createAsyncThunk(
    'wishlist/all',
    async (data: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.get(allUserWishlistEndPoint, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
        
            return response.data.wishlist;
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