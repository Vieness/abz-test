import {rootApi} from "../../app/rootApi";

export const singUpApi = rootApi.injectEndpoints({
  endpoints: build => ({
    singUpUser: build.mutation({
      query: (arg) => {
        return {
          url: 'users',
          body: arg,
          method: 'POST'
        }
      }
    }),
    getPositions: build.query({
      query: () => {
        return {
          url: 'positions',
        }
      },
      transformResponse: (response) => response.positions,
    }),
    getToken: build.query({
      query: () => 'token'
    })
  }),
  overrideExisting: true
})

export const {useSingUpUserMutation, useGetPositionsQuery, useLazyGetTokenQuery} = singUpApi