import Posts from "../components/Posts";
import { useAppDispatch, useAppSelector } from "../hooks/customHookQuery";
import classes from '../index.module.css'
import { slicePosts } from "../store/slicePosts";

function Main() {

	const dispatch = useAppDispatch()
	const { flag, resPostItem } = useAppSelector(state => state.Posts)

	function arrayLike() {
		dispatch(slicePosts.actions.switchLikePost(!flag))
	}

	return (
		<>
			<div className={classes.containerBtn}>
				<button className={classes.btn} onClick={() => arrayLike()}>{flag ? 'Показать все посты' : 'Показать понравившиеся посты'}</button>
			</div>
			{resPostItem.length ?
				<Posts />
				:
				<h2 className={classes.title}>Постов нет!</h2>
			}
		</>
	);
}

export default Main;
