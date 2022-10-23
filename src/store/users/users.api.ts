import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/'}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: `users`
            })
        })
    })    
})

const { useGetUsersQuery } = usersApi