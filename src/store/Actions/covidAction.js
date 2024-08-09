import { createAsyncThunk } from "@reduxjs/toolkit";
import { headers } from "../../constants";
import axios from "axios";
const getCovidData = createAsyncThunk('covid/getCovidData', async ({ code }) => {
    const params = { iso: code }
    const covidData = axios.get(`${process.env.REACT_APP_COVID_URL}/reports`, { params, headers });
    const countryData = axios.get(`${process.env.REACT_APP_COUNTRY_URL}/alpha/${code}`);
    const response = await Promise.all([covidData, countryData]);

    let covid = {
        ...response[0].data.data[0],
        ...response[0].data.data[0].region
    }
    delete covid.region
    delete covid.cities

    return { covid, country: response[1].data[0] };
});

export { getCovidData };