import {BUSY} from './const';

export const busy = (status) => {
  return {
    type: BUSY,
    status: status
  }
};
