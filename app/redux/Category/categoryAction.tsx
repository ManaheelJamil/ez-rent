"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showCategoryEndPoint} from '../../constants/endPointConstant'
import { toast } from 'react-toastify';
// import {getToken} from '../../utils/getToken';



export const showCategories = createAsyncThunk(
    'category/all',
    async (_, { rejectWithValue }) => {
        try { 
            const response = await axios.get(showCategoryEndPoint)
            return response.data.categories;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Categories fetch failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

