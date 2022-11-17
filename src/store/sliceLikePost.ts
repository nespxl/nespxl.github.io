import { createSlice } from "@reduxjs/toolkit";

interface IState {
	arrayLike: Array<object>,
}

const initialState: IState = {
	arrayLike: [],
}

export const sliceLikePost = createSlice({
	name: 'sliceLikePost',
	initialState,
	reducers: {
		todoLike(state, actions) {
			state.arrayLike = actions.payload
		},
	}
})

export default sliceLikePost.reducer
