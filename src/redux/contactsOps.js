import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://670c0e727e5a228ec1cf6f7a.mockapi.io`;

export const fetchContactsThunk = createAsyncThunk(
  `fetchAll`,
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  `addContact`,
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  `deleteContact`,
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
