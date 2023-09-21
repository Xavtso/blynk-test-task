import { postsActions } from "./posts-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://test-task-cade5-default-rtdb.europe-west1.firebasedatabase.app/postItems.json",
      );
      const data = await res.json();
      return data;
    };
    try {
      const postData = await fetchHandler();

      dispatch(postsActions.replaceData(postData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendCartData = (post) => {
  return async () => {
    const sendRequest = async () => {
       await fetch(
        "https://test-task-cade5-default-rtdb.europe-west1.firebasedatabase.app/postItems.json",
        {
          method: "PUT",
          body: JSON.stringify(post),
        },
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
