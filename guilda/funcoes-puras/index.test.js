const {
  array: { push, pop },
  object: { set, destroy },
} = require('.')


describe('Array push', () => {
  const array = [1, 2, 3]
  const result = push(array, 4)

  it('should add an element in the end', () => {
    expect(result).toMatchObject([1, 2, 3, 4])
  })

  it('should not change the initial array', () => {
    expect(array).toMatchObject([1, 2, 3])
  })
})


describe('Array slice', () => {
  const array = [1, 2, 3]
  const result = pop(array)

  it('should remove the last element', () => {
    expect(result).toMatchObject([1, 2])
  })

  it('should not change the initial array', () => {
    expect(array).toMatchObject([1, 2, 3])
  })
})


describe('Object set key', () => {
  const object = { a: 1, b: 2 }
  const result = set(object, 'c', 3)

  it('should add a new key with the proper value', () => {
    expect(result).toMatchObject({ a: 1, b: 2, c: 3 })
  })

  it('should not change the initial object', () => {
    expect(object).toMatchObject({ a: 1, b: 2 })
  })
})

describe('Object destroy key', () => {
  const object = { a: 1, b: 2 }
  const result = destroy(object, 'b')

  it('should delete a key', () => {
    expect(result).toMatchObject({ a: 1 })
  })

  it('should not change the initial object', () => {
    expect(object).toMatchObject({ a: 1, b: 2 })
  })
})
