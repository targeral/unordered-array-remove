const remove = (arr, i) => {
  if (i >= arr.length || i < 0) return

  let last = arr.pop()
  if (i < arr.length) {
    let temp = arr[i]
    arr[i] = last
    return temp
  }

  return last
}

module.exports = remove
