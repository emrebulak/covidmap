import { createAsyncThunk } from "@reduxjs/toolkit";
import { headers } from "../../constants";
import axios from "axios";
const getCovidData = createAsyncThunk('covid/getCovidData', async ({ code, query }) => {
    const params = { iso: code, q: query }
    const covidData = axios.get(`${process.env.REACT_APP_COVID_URL}/reports`, { params, headers });

    const url = code ? `${process.env.REACT_APP_COUNTRY_URL}/alpha/${code}` : `${process.env.REACT_APP_COUNTRY_URL}/name/${query}`;
    const countryData = axios.get(url);
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