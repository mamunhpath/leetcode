import Node from './node'

export default class BinarySearchTree {
  root: any
  constructor() {
    this.root = null
  }

  add(data: any) {
    const node = new Node(data)
    if (!this.root) {
      this.root = node
    } else {
      let current = this.root
      while (current) {
        if (node.data < current.data) {
          if (!current.left) {
            current.left = node
            break
          }
          current = current.left
        } else if (node.data > current.data) {
          if (!current.right) {
            current.right = node
            break
          }
          current = current.right
        } else {
          break
        }
      }
    }
  }

  contains(data: any) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false
  }

  getMin() {
    let node = this.root
    if (!node) return null

    while (node.left) {
      node = node.left
    }

    return node.data
  }

  getMax() {
    let node = this.root
    if (!node) return null

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}
