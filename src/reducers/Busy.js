
import { Busy } from '../actions/const'

function busy(state = false, action) {
  switch (action.type) {
    case Busy:
      return action.status;
    default:
      return state;
  }
}

export default busy;
