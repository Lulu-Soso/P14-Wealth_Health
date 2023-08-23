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
    createEmployee: builder.mutation({
      query: (newEmployee) => ({
        // url: `${EMPLOYEES_URL}`,
        url: EMPLOYEES_URL,
        // url: "http://localhost:5000/api/employees",
        method: "POST",
        body: newEmployee,
      }),
      invalidatesTags: ['employees'],
    }),
  }),
});

export const { useGetEmployeesQuery, useCreateEmployeeMutation } = employeesApiSlice;
