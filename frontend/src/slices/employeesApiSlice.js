import { EMPLOYEES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const employeesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: EMPLOYEES_URL,
      }),
      keepUnusedDataFor: 5, // 5 secondes
    }),
  }),
});

export const { useGetEmployeesQuery } = employeesApiSlice;
