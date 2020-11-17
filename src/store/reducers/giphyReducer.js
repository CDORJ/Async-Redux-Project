import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actions";

const initialState = {
  img: "",
  title: "",
  isLoading: false,
  error: "",
};
export const giphyReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
