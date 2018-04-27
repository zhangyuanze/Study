const mergeSort = function loop (arr) {
  const [base, ...other] = arr
  if (arr.length < 2) return arr
  let left = []
  let right = []
  other.map(item => {
    if (item > base) { right.push(item) }
    else { left.push(item) }
  })
  return [...loop(left), base, ...loop(right)]
}
mergeSort(arr)




function sortgroupcity(originalObj){
  let sortobj = {};
  for (let i = 65; i <= 90; i++) {
      if (originalObj[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = originalObj[String.fromCharCode(i)];
      }
  }
  return sortobj
}
