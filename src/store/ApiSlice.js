import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchStart(state) {
      state.status = "loading";
    },

    fetchSuccess(state, action) {
      state.status = "success";
      state.data = action.payload;
    },

    fetchFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = apiSlice.actions;
export default apiSlice.reducer;

export const fetchItem = () => async (dispatch) => {
  dispatch(fetchStart());
  const url = process.env.REACT_APP_API_URL;
  try {
    const response = await axios.get(`${url}/products`);
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
