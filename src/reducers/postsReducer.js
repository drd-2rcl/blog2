export default (state, action) => {
  // BAD!
  // return document.querySelector('input');

  // BAD!
  // return axios.get('/posts')

  // BAD!
  // state[0] = 'Sam'
  // state.pop()
  // state.push()
  // state.name = 'Same'
  // state.age = 30

  // MUST NOT MUTATE ITS INPUT 'STATE' ARGUMENT
  // inside JS, strings and numbers are immutable values, unless inside object or array;

  // GOOD!
  return state + action


}