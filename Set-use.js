/**
 * @description 通过 Set 实现数组并集，交集，差集
 */
const arr1 = [1,2,3,4,5,6]
const arr2 = [3,4,5,6,7,8,9,10]

const bingji = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))]
}

const jiaoji = (arr1, arr2) => {
  const temp = new Set(arr1)
  return Array.from(new Set(arr2)).filter(item => {
    return temp.has(item)
  })
} 

const chaji = (arr1, arr2) => {
  const temp1 = new Set(arr1)
  const temp2 = new Set(arr2)
  const res = []
  for(let item of temp1) {
    !temp2.has(item) && res.push(item)
  }
  return res
}


console.log(bingji(arr1, arr2));
console.log(jiaoji(arr1, arr2));
console.log(chaji(arr1, arr2));