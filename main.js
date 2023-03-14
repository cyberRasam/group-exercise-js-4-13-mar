class Queue {
  constructor() {
    this._storage = [];
  }

  add(elem) {
    this._storage.unshift(elem);
    return this;
  }

  pop() {
    return this._storage.pop();
  }

  look() {
    return this._storage[this._storage.length - 1];
  }

  size() {
    return this._storage.length;
  }
}

// let eq = new Queue();

// eq.add(10).add(15).add(20);

// while (eq.size() > 0) {
//   console.log(eq.pop());
// }

class Deque {
  constructor() {
    this._storage = [];
  }

  addFirst(elem) {
    this._storage.unshift(elem);
    return this;
  }

  addLast(elem) {
    this._storage.push(elem);
    return this;
  }

  popFirst() {
    return this._storage.shift();
  }

  popLast() {
    return this._storage.pop();
  }

  lookFirst() {
    return this._storage[0];
  }

  lookLast() {
    return this._storage[this._storage.length - 1];
  }

  size() {
    return this._storage.length;
  }
}

let dq = new Deque();

dq.addFirst(10).addFirst(20).addLast(30);

while (dq.size() > 0) {
  console.log(dq.popLast());
}
