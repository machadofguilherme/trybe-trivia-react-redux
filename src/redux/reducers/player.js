const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  timer: 30,
};
const player = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_EMAIL':
    return { ...state, gravatarEmail: action.email };
  case 'SET_NAME':
    return { ...state, name: action.name };
  case 'SET_SCORE':
    return { ...state, score: action.score + state.score };
  case 'CLEAR_SCORE':
    return { ...state, score: 0 };
  case 'SET_TIMER':
    return { ...state, timer: (state.timer >= 1 ? state.timer - 1 : 0) };
  case 'SET_STOP_TIMER':
    return { ...state, timer: 0 };
  case 'SET_RESTART_TIMER':
    return { ...state, timer: 31 };
  case 'SET_ASSERTION':
    return { ...state, assertions: state.assertions + 1 };
  default:
    return state;
  }
};
export default player;
