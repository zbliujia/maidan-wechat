
import { BUSY } from '../actions/const'

function busy(state = false, action) {
  switch (action.type) {
    case BUSY:
      return action.status;
    default:
      return state;
  }
}

export default busy;
