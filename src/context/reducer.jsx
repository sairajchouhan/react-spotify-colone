export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // token:
  //   'BQC2aFCkgB5q91fNX5IwZe0YHW7RklC--wJUWpFNr-kRaWC3H5AKRrpGIOqHV0vgEEPCaMpmf4i8HWRedoMU3JK_Z6sJ8mYtKvbKDl_zKUFobh8UkC5BsrsHlhbqQllv_bi6cBZMbM3MBMF3YEV28q0_LMbSW3iZhzRZeDgF8BbZO8nAhite',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_TOKEN':
      return { ...state, token: action.token };
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;
