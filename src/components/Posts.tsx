import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/customHookQuery";
import { PostItem } from "./PostItem";
import classes from '../style/Posts.module.css'
import { slicePosts } from "../store/slicePosts";

export default function Posts() {
	const dispatch = useAppDispatch()
  const { postItem, resPostItem, isLoading, flag } = useAppSelector(state => state.Posts)
	const { arrayLike } = useAppSelector(state => state.Like)

	useEffect(() => {
		if(flag) {
			dispatch(slicePosts.actions.todoFetchSuccess(arrayLike))
		} else {
			dispatch(slicePosts.actions.todoFetchSuccess(resPostItem))
		}
	}, [flag, arrayLike, resPostItem])

  return (
		<div className={classes.container}>
			{isLoading ?
				<p className={classes.loading}>Loading...</p>
				:
				<>
					{postItem.map((post): object => (
						<PostItem post={post} key={post.id} />
					))}
				</>
			}
		</div>
	)
}
