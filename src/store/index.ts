import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Posts from '../store/slicePosts'
import Like from '../store/sliceLikePost'

export const rootReducer = combineReducers({
    Posts,
    Like,
})

export const reducerToolkit = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type ToolkitState = ReturnType<typeof reducerToolkit>
export type AppDispatch = ToolkitState['dispatch']
