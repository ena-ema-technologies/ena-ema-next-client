import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `${token}`);
    }
    return headers;
  },
});

// const BaseQueryWithRefreshToken = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.status === 401) {
//     console.log('sending refresh token');

//     const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
//       method: 'POST',
//       credentials: 'include',
//     });
//     const data = await res.json();
//     console.log(data);

//     const user = (api.getState() as RootState).auth.user;

//     api.AppDispatch(
//       setUser({
//         user,
//         token: data.data.accessToken,
//       }),
//     );
//     result = await baseQuery(args, api, extraOptions);
//   }
//   return result;
// };

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: [
    'users',
    'queries',
    'teams',
    'services',
    'reviews',
    'applications',
    'hiringPosts',
  ],
  endpoints: () => ({}),
});
