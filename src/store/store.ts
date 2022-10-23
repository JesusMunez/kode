import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersAPI } from "../services/UserService";
import { usersApi } from "./users/users.api";

// export const store = configureStore({
//     reducer: {
//         [usersApi.reducerPath]: usersApi.reducer
//     }
// })

const rootReducer = combineReducers({
    [usersAPI.reducerPath]: usersAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']