import fetch from 'isomorphic-fetch'
import {CLICK_PAY,RECEIVE_PAY,REQUEST_PAY} from './const';
import { busy } from './Busy';
import { replace } from 'react-router-redux'
//import { push } from 'react-router-redux'

export const clickPay = () => {
  return {
    type: CLICK_PAY
  }
};

function requestPay(money) {
  return {
    type: REQUEST_PAY,
    money
  }
}

function receivePay(money, json) {
  return {
    type: RECEIVE_PAY,
    money,
    kind: json.kind
    //posts: json.data.children.map(child => child.data)
  }
}

function fetchPay(money) {
  return dispatch => {
    dispatch(requestPay(money));
    //return fetch(`https://www.reddit.com/r/${reddit}.json`)
    return fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(json => {
        dispatch(receivePay(money, json));
        dispatch(busy(false));
        dispatch(replace('/PayOver'));
      })
  }
}

function shouldFetchPay(state) {
  return state.Busy;
}

export function fetchPayIfNeeded(money) {
  return (dispatch, getState) => {
    if (shouldFetchPay(getState())) {
      return dispatch(fetchPay(money))
    }
  }
}
