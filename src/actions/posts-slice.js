import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    itemsList: [],
    comments: [],
    activeItem: [],
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.itemsList = action.payload.itemsList;
      state.comments = action.payload.comments;
      state.activeItem = action.payload.activeItem;
    },

    addPost(state, action) {
      const newItem = action.payload;

      if (!state.itemsList) {
        state.itemsList = []
        
      }

      state.itemsList?.push({
        id: newItem.id,
        text: newItem.text,
        comments: [],
      });
      state.changed = true;
    },
    deletePost(state, action) {
      const { id } = action.payload;
      state.itemsList = state.itemsList.filter((item) => item.id !== id);
      state.changed = true;
      if (state.activeItem === id) {
        state.comments = [];
        state.activeItem = [];
      }
    },

    addComment(state, action) {
      const target = action.payload;

      const post = state.itemsList.find((item) => item.id === target.id);

      if (!post) {
        alert('Oops... You find little bug(')
        return
      }

      post.comments.push({
        color: target.color,
        text: target.text,
      });
    },

    makeActive(state, action) {
      const { id } = action.payload;
      state.activeItem = id;
    },

    showActiveComments(state, action) {
      const id = state.activeItem;
      if (id) {
        const targetPost = state.itemsList.find((item) => item.id === id);
        const activeComments = targetPost?.comments;
        state.comments = activeComments;
      }
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
