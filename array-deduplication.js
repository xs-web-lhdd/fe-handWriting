// 双循环法：
function unique_one(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }

  return arr
}

// indexOf：
function unique_two(arr) {
  const res = []
  arr.map((item) => {
    if(res.indexOf(item) === -1) {
      res.push(item)
    }
  })

  return res
}

// includes：
function unique_three(arr) {
  const res = []
  arr.map((item) => {
    if(!res.includes(item)) {
      res.push(item)
    }
  })

  return res
}

// Set 去重：
function unique_four(arr) {
  const res = new Set(arr)
  return [...res]
}

// sort + 双指针：
function unique_five(arr) {
  arr.sort((a, b) => a - b)
  var fast = 1, slow = 0
  while(fast < arr.length) {
    if(arr[slow] === arr[fast]) {
      arr.splice(fast, 1)
    } else {
      fast++
      slow++
    }
  }

  return arr
}

// map + indexOf
function unique_six(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

// Map：
function unique_seven(arr) {
  const map = new Map()
  const res = []
  for(var i = 0; i < arr.length; i++) {
    if(!map.has(arr[i])) {
      map.set(arr[i],true)
      res.push(arr[i])
    }
  }

  return res
}

// reduce + indexOf：
function unique_nine(arr) {
  const res = arr.reduce((acc, cur) => {
    if(acc.indexOf(cur) == -1) {
      acc.push(cur)
    }
  
    return acc
  }, [])

  return res
}

// reduce + includes：
function unique_eight(arr) {
  const res = arr.reduce((acc, cur) => {
    if(!acc.includes(cur)) {
      acc.push(cur)
    }
  
    return acc
  }, [])

  return res
}