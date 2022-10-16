class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  pop() {
    if (this.empty()) {
      return undefined;
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  peek() {
    if (this.empty()) {
      return undefined;
    }

    return this.items[this.count - 1]
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    if (!isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`

    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString;
  }
}