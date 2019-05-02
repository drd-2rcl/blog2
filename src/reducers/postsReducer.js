export default (state, action) => {
  // BAD!
  // return document.querySelector('input');

  // BAD!
  // return axios.get('/posts')

  // GOOD!
  return state + action
}