import { useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
// import { postsActions } from "./actions/posts-slice";
import { fetchData, sendCartData } from "./actions/post-actions";
let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (posts.changed) {
      dispatch(sendCartData(posts));
    }
  }, [posts, dispatch]);

  return (
    <div className="App">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
