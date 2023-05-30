import toolkit from "./toolkit";
import { combineReducers, configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    mytoolkit: toolkit
})

const store = configureStore({
    reducer: rootReducer
})

export default store