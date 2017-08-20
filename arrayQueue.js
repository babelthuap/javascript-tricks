class ArrayQueue {
  constructor() {
    this.clear();
  }
  clear() {
    this.q_ = [];
    this.i_ = 0;
  }
  push(value) {
    this.q_.push(value);
  }
  pop() {
    if (this.i_ < this.q_.length) {
      const value = this.q_[this.i_++]
      if (this.i_ == this.q_.length) {
        this.clear();
      }
      return value;
    }
  }
  isEmpty() {
    return this.i_ == this.q_.length;
  }
}
