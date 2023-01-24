import {configureStore} from '@reduxjs/toolkit';
import productReducer from "../State/ProductSlice";
import settingsReducer from "../State/SettingSlice";

export default configureStore({
    reducer:{
        settings:settingsReducer,
        product:productReducer,
    }
})