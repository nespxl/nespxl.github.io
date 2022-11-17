import classes from '../style/InfoItem.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/customHookQuery'
import { sliceLikePost } from '../store/sliceLikePost'

interface IPost {
	from: {
		albumId: number,
		id: number,
		title: string,
		url: string,
		thumbnailUrl: string	
	}
}

export default function InfoItem() {
	const location = useLocation()
	const {from}: IPost = location.state
	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	function prevFunc() {
		navigate(-1)
		dispatch(sliceLikePost.actions.todoLike([]))
	}

	return (
		<div className={classes.container}>
			<button onClick={() => prevFunc()} className={classes.btn}>На главную</button>
			<p>Страница с элементом под id: {from.id}</p>
			<h1>{from.title}</h1>
		</div>
	)
}