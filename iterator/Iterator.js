class Iterator {
  constructor(list = []) {
    this.list = list;
    this.index = 0;
  }

  next() {
    if (this.hasNext()) {
      this.index += 1;
    }
    return this.current();
  }
  hasNext() {
    return this.list.length - 1 > this.index;
  }

  current() {
    return this.list[this.index];
  }

  prev() {
    if (this.index !== 0) {
      this.index -= 1;
    }

    return this.current();
  }
  last() {
    var [last] = [...this.list].reverse();
    return last;
  }

  first() {
    var [first] = this.list;
    return first;
  }
}

module.exports = Iterator;
