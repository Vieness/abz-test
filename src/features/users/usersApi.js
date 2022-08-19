import {rootApi} from "../../app/rootApi";

export const usersApi = rootApi.injectEndpoints({
  endpoints: build => ({
    getUsers: build.query({
      query: (arg) => {
        return {
          url: 'users',
          params: arg
        }
      }
    })
  }),
  overrideExisting: true
})

export const {useGetUsersQuery} = usersApi