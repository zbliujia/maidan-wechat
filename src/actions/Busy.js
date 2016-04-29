import {Busy} from './const';

export const busy = (status) => {
  return {
    type: Busy,
    status: status
  }
};
