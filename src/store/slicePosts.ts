import { createSlice } from "@reduxjs/toolkit";

interface IPost {
	albumId: number,
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string	
}

interface IState {
    postItem: Array<IPost>,
    resPostItem: Array<IPost>,
	isLoading: boolean,
	error: string,
	flag: boolean,
}

const initialState: IState = {
    postItem: [],
	resPostItem: [],
	isLoading: false,
	error: '',
	flag: false,
}

export const slicePosts = createSlice({
    name: 'slicePosts',
    initialState,
    reducers: {
        todoFetch(state) {
			state.isLoading = true
		},
		todoFetchSuccess(state, actions) {
			state.isLoading = false
			state.error = ''
			state.postItem = actions.payload
		},
		todoFetchSuccessRes(state, actions) {
			state.isLoading = false
			state.error = ''
			state.resPostItem = actions.payload
		},
		todoFetchError(state) {
			state.isLoading = false
			state.error = 'error'
			state.postItem = []
		},
		switchLikePost(state, actions) {
			state.flag = actions.payload
		}
    }
})

export default slicePosts.reducer
