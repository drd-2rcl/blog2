import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

// INCLUDE MEMOIZE
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// CREATE PRIVATE CONST
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}); 


// ORIGINAL CODE
// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
  
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// };

// REFACTORING TO LODASH MEMOIZE FUNCTION
// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
    
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   });
// };
