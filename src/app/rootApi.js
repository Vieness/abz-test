import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {removeToken, setToken} from "../features/singUp/slice/singUpSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
  prepareHeaders: (headers, {getState}) => {
    const token = getState().auth.token || undefined
    if (token) {
      headers.set('token', token)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api) => {
  let result = await baseQuery(args, api)
  if (result?.error?.status === 401 && !result?.data?.success) {
    const refreshResult = await baseQuery('token', api)
    if (refreshResult.data) {
      api.dispatch(setToken(refreshResult.data?.token))
      localStorage.setItem('access_token', refreshResult.data?.token);

      result = await baseQuery(args, api)
    } else {
      api.dispatch(removeToken())
    }
  }

  return result
}

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})