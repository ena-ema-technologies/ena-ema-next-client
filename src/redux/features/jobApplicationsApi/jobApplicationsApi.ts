import { baseApi } from '@/redux/api/baseApi';

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJobApplications: builder.mutation({
      query: (queryData) => ({
        url: '/job-applications/submit-job-application',
        method: 'POST',
        body: queryData,
      }),
      invalidatesTags: ['applications'],
    }),

    getAllJobApplications: builder.query({
      query: () => ({
        url: `/job-applications`,
        method: 'GET',
      }),
      providesTags: ['applications'],
    }),

    getMarkedJobApplications: builder.query({
      query: () => ({
        url: `/job-applications/marked`,
        method: 'GET',
      }),
      providesTags: ['applications'],
    }),

    getSingleJobApplications: builder.query({
      query: (id: string) => ({
        url: `/job-applications/${id}`,
        method: 'GET',
      }),
      providesTags: ['applications'],
    }),

    updateJobApplication: builder.mutation({
      query: (id) => ({
        url: `/job-applications/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['queries'],
    }),

    deleteJobApplications: builder.mutation({
      query: (id) => ({
        url: `/job-applications/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['applications'],
    }),
  }),
});

export const {
  useCreateJobApplicationsMutation,
  useGetAllJobApplicationsQuery,
  useGetMarkedJobApplicationsQuery,
  useGetSingleJobApplicationsQuery,
  useUpdateJobApplicationMutation,
  useDeleteJobApplicationsMutation,
} = queryApi;
