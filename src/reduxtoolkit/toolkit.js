import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const patientsF = createAsyncThunk(
    'said/patientsF',
    async()=>{
        const patientsData = await axios({
            url: `http://localhost:8000/patients`,
            method: "get"
        })
        console.log(patientsF);
        if(patientsData.status == 200){
            return patientsData.data
        }
    }
)

const slice = createSlice({
    name: "said",
    initialState: {
        name: "saidislam",
        patients : null
    },
    extraReducers: {
        [patientsF.fulfilled] : (state, action)=>{
            state.patients = action.payload
        }
    }
})

export default slice.reducer
export const {} = slice.actions