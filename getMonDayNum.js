
//获取某个月天数
function getDaysInMonth(year, month) {
			month = parseInt(month, 10);
			var temp = new Date(year, month, 0);
			return temp.getDate();
		}



//debounce
function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
