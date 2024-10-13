import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReducer,
  },
});
