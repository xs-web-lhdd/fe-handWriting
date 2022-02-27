/**
 * @description 下划线转驼峰
 * @author 氧化氢
 */

 function getCamel(str) {
  let arr = str.split('_')
  const res = arr.map((item, index) => {
    if(index !== 0) {
      return item.slice(0, 1).toUpperCase() + item.slice(1)
    } else {
      return item
    }
  }).join('')
  return res
}