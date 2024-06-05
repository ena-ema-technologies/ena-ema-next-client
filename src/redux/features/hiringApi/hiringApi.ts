import { baseApi } from '@/redux/api/baseApi';

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createHiringPost: builder.mutation({
      query: (queryData) => ({
        url: '/hiring/create-hiring-post',
        method: 'POST',
        body: queryData,
      }),
      invalidatesTags: ['hiringPosts'],
    }),

    getAllHiringPost: builder.query({
      query: () => ({
        url: `/hiring`,
        method: 'GET',
      }),
      providesTags: ['hiringPosts'],
    }),

    getSingleHiringPost: builder.query({
      query: (id: string) => ({
        url: `/hiring/${id}`,
        method: 'GET',
      }),
      providesTags: ['hiringPosts'],
    }),

    updateHiringPost: builder.mutation({
      query: (id) => ({
        url: `/hiring/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['hiringPosts'],
    }),

    deleteHiringPost: builder.mutation({
      query: (id) => ({
        url: `/hiring/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['hiringPosts'],
    }),
  }),
});

export const {
  useCreateHiringPostMutation,
  useGetAllHiringPostQuery,
  useGetSingleHiringPostQuery,
  useUpdateHiringPostMutation,
  useDeleteHiringPostMutation,
} = queryApi;
