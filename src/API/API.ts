import axios from 'axios';
import { AppDispatch } from '../store';
import { slicePosts } from '../store/slicePosts';

export const API = (API: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(slicePosts.actions.todoFetch())
		const response = await axios.get(API)
		dispatch(slicePosts.actions.todoFetchSuccess(response.data))
		dispatch(slicePosts.actions.todoFetchSuccessRes(response.data))
	} catch (error) {
		dispatch(slicePosts.actions.todoFetchError())
	}
}
