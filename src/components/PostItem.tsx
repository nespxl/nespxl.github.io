import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/customHookQuery'
import { sliceLikePost } from '../store/sliceLikePost'
import { slicePosts } from '../store/slicePosts'
import classes from '../style/PostItem.module.css'
import { Link } from 'react-router-dom'

interface IArrayPosts {
	albumId: number,
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string
}

interface IPost {
	post: {
		albumId: number,
		id: number,
		title: string,
		url: string,
		thumbnailUrl: string	
	}
}

const array: IArrayPosts[] = []

export function PostItem({ post }: IPost) {
	const { resPostItem, flag } = useAppSelector(state => state.Posts)
	const dispatch = useAppDispatch()
	const [active, setActive] = useState(true)

	function deletePost(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation()
		e.preventDefault()
		if(!flag) {
			setActive(!active)
			dispatch(slicePosts.actions.todoFetchSuccessRes(resPostItem.filter(p => p.id !== post.id)))
			if(!active) {
				addLike(e)
			}
		}
	}

	function addLike(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation()
		e.preventDefault()
		setActive(!active)
		if(!active) {
			for(let i = 0; i < array.length; i++) if(array[i].id === post.id) array.splice(i, 1)
		} else {
			for(let i = 0; i < array.length; i++) if(array[i].id === post.id) array.splice(i, 1)
			array.push(post)
		}
		dispatch(sliceLikePost.actions.todoLike([...array]))
	}

	return (
		<Link to={'/InfoItem'} state={{ from: post }} className={classes.postItem}>
			<figure className={classes.figure}>
				{post.id}. <strong className={classes.title}>{post.title}</strong>
				<img src={post.url} alt="картинка :/" className={classes.img} />
			</figure>
			<div className={classes.btnContainer}>
				<button className={active ? classes.btnLike : classes.btnLikeActive} onClick={(e) => addLike(e)}>
					<svg width="45px" height="45px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
						<g id="Icons-56/like_outline_56" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g id="like_outline_56">
									<polygon points="0 0 56 0 56 56 0 56"></polygon>
									<path d="M18.2894737,11 C11.5021848,11 6,16.5021848 6,23.2894737 C6,30.1547097 8.75158974,33.5980763 20.454993,42.7007233 L25.8512079,46.8977793 C27.1150945,47.8808023 28.8849055,47.8808023 30.1487921,46.8977793 L35.545007,42.7007233 C47.2484103,33.5980763 50,30.1547097 50,23.2894737 C50,16.5021848 44.4978152,11 37.7105263,11 C34.050349,11 30.7993729,12.7358213 28,16.0983552 C25.2006271,12.7358213 21.949651,11 18.2894737,11 Z M18.2894737,14 C21.4186747,14 24.2227444,15.7559317 26.7662689,19.4339873 L26.9718908,19.7313261 C27.3645538,20.2991351 28.1431702,20.441119 28.7109792,20.0484561 C28.8349437,19.9627296 28.9423827,19.8552906 29.0281092,19.7313261 L29.2337311,19.4339873 L29.2337311,19.4339873 C31.7772556,15.7559317 34.5813253,14 37.7105263,14 C42.840961,14 47,18.159039 47,23.2894737 C47,28.9059372 44.7096941,31.7720486 33.7031852,40.3326667 L28.3069703,44.5297227 C28.1264151,44.6701545 27.8735849,44.6701545 27.6930297,44.5297227 L22.2968148,40.3326667 C11.2903059,31.7720486 9,28.9059372 9,23.2894737 C9,18.159039 13.159039,14 18.2894737,14 Z" id="↳-Icon-Color" fill="currentColor"></path>
								</g>
						</g>
					</svg>
				</button>
				<button onClick={(e) => deletePost(e)} className={classes.btnDelete}>Удалить</button>
			</div>
		</Link>
	)
}
