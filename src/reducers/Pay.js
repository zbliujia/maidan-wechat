
import { CLICK_PAY } from '../actions/const'

//这里不知道是否需要reduce来做 还是直接click的时候 做就OK了
//明天看看异步的例子怎么弄的(链接spring后台) 这个怎么弄 然后切换下页面 今天先做数字那块
function pay(state = 'NO', action) {
  switch (action.type) {
    case CLICK_PAY:
      return 'YES';
    default:
      return state;
  }
}

export default pay;
