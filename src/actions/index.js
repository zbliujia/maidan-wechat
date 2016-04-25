
import { CLICK_KEYBOARD } from './const'

export const clickKeyboard = (text) => {
  return {
    type: CLICK_KEYBOARD,
    text: text
  }
};
