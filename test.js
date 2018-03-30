const tape = require('tape')
const remove = require('./')

tape('remove', t => {
  let list = [0, 1, 2]
  remove(list, 1)
  t.same(list.sort(), [0, 2])
  remove(list, 0)
  t.same(list.sort(), [2])
  remove(list, 0)
  t.same(list, [])
  t.end()
})

tape('out of bounds', t => {
  let list = [0, 1, 2]
  remove(list, 42)
  t.same(list, [0, 1, 2])
  remove(list, -1)
  t.same(list, [0, 1, 2])
  t.end()
})
