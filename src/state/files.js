//-------------
// Types
//-------------
export const LOAD_ORIGINAL = 'LOAD_ORIGINAL';


//-------------
// Actions
//-------------
export function loadOriginal(file) {
  return {
    type: LOAD_ORIGINAL,
    payload: {file}
  };
}


//-------------
// Reducer
//-------------
export default function(state = {}, action) {
  if (action.type === LOAD_ORIGINAL) {
    return {original: action.payload.file};
  } else {
    return state;
  }
}
