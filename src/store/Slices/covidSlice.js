import { createSlice } from "@reduxjs/toolkit";
import { getCovidData } from "../Actions/covidAction";

const initialState = {
    isLoading: false,
    error: null,
    data: null
}

export const covidSlice = createSlice({
    name: "covid",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCovidData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.data = null;
        });
        builder.addCase(getCovidData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        });
        builder.addCase(getCovidData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
            state.data = null;
        });
    }
});

export default covidSlice.reducer;