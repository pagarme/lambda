const push = (array, element) => {
  array.push(element)
  return array
}

const pop = array => {
  array.pop()
  return array
}

const set = (object, key, value) => {
  object[key] = value
  return object
}

const destroy = (object, key) => {
  delete object[key]
  return object
}

const array = { push, pop }
const object = { set, destroy }

module.exports = {
  array,
  object,
}
