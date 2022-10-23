import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/IUser'

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464'}),
    endpoints: (build) => ({
        getUsers: build.query<IUser, string>({
            query: () => ({
                url: `/users?__dynamic=true`
            })
        })
    })    
})

// const { useGetUsersQuery } = usersApi
// <IUser[], string>