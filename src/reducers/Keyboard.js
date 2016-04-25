
import { CLICK_KEYBOARD } from '../actions/const'

function keys(state = [], action) {
  switch (action.type) {
    case CLICK_KEYBOARD:
      return [
        ...state,
        action.text
      ];
    default:
      return state
  }
}

export default keys
