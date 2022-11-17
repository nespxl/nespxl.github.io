import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import { useAppDispatch } from "./hooks/customHookQuery";
import InfoItem from "./Pages/InfoItem";
import Main from "./Pages/Main";
import { API } from "./API/API";
import {useEffect} from 'react'

function App() {

	const dispatch = useAppDispatch()

  useEffect(() => {
		dispatch(API('https://jsonplaceholder.typicode.com/photos?_limit=100'))
  }, [])

  const Path = () => {
    const routes = useRoutes([
      { path: "/", element: <Main /> },
      { path: "/InfoItem", element: <InfoItem /> },
    ]);
    return routes;
  }

  return (
    <>
      <Router>
        <Path />
      </Router>
    </>
  );
}

export default App;
