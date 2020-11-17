const initialState = {
  book: {
    title: "",
    img: "",
  },
  author: "",
  is_loading_data: false,
  error: "",
};

export const endersGameReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
