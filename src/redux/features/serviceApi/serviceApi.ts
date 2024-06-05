import { baseApi } from '../../api/baseApi';

const servicesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createServices: build.mutation({
      query: (data) => {
        return {
          url: '/services/create-service',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['services'],
    }),
    // get all Service started from here
    getAllService: build.query({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
      providesTags: ['services'],
    }),
    //get single service started from here
    getService: build.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'GET',
      }),
      providesTags: (id) => [{ type: 'services', id }],
    }),
    // delete Service started from here
    deleteService: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['services'],
    }),
  }),
});

export const {
  useCreateServicesMutation,
  useGetServiceQuery,
  useGetAllServiceQuery,
  useDeleteServiceMutation,
} = servicesApi;
