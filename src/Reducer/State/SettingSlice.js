import {createSlice} from '@reduxjs/toolkit';
export const settingsSlice = createSlice({
    name:"settings",
    initialState:{
        loader:"d-none"
    },
    reducers:{
        SetLoader:(state,action)=>{
            state.loader = ""
        },
        HideLoader:(state,action)=>{
            state.loader = "d-none"
        }
    }
});

export const {SetLoader,HideLoader}=settingsSlice.actions;

export default settingsSlice.reducer