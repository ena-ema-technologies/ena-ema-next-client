import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdmin: builder.query({
      query: () => ({
        url: `/admins`,
        method: 'GET',
      }),
      providesTags: ['users'],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admins/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useGetAllAdminQuery, useDeleteAdminMutation } = authApi;
