import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  ideas: [],
};

const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    addIdea: {
      reducer: (state, action) => {
        state.ideas.push(action.payload);
      },
      prepare: (title, description, tags = []) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            tags,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    updateIdea: (state, action) => {
      const { id, title, description, tags } = action.payload;
      const idea = state.ideas.find((i) => i.id === id);
      if (idea) {
        idea.title = title || idea.title;
        idea.description = description || idea.description;
        idea.tags = tags || idea.tags;
      }
    },
    deleteIdea: (state, action) => {
      state.ideas = state.ideas.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addIdea, updateIdea, deleteIdea } = ideasSlice.actions;
export default ideasSlice.reducer;
