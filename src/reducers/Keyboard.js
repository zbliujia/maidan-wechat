
import { CLICK_KEYBOARD } from '../actions/const'

function keys(state = [], action) {
  switch (action.type) {
    case CLICK_KEYBOARD:
      let dotOffset = state.indexOf('.');
      if(action.text === 'del'){
        if(state.length <= 1) {
          return [];
        } else {
          return state.slice(0,state.length - 1);
        }
      } else if(action.text === '.') {
        if(state.length === 0) {
          return ['0','.'];
        } else if(dotOffset >= 0) {
          return state;
        } else {
          return [
            ...state,
            action.text
          ];
        }
      }
      //数字处理
      if(state.length === 0 && action.text === '0') {
        return ['0','.'];
      }
      if(dotOffset >= 0 && (state.length - 1) - dotOffset >= 2) {
        return state;
      }
      return [
        ...state,
        action.text
      ];
    default:
      return state
  }
}

export default keys
