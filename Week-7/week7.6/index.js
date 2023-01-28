var MyQueue = function () {
  this.queue = [];
  this.tmp = [];
};

MyQueue.prototype.push = function (x) {
  while (this.queue.length != 0) this.tmp.push(this.queue.pop());
  this.queue.push(x);
  while (this.tmp.length != 0) this.queue.push(this.tmp.pop());
};

MyQueue.prototype.pop = function () {
  return this.queue.pop();
};

MyQueue.prototype.peek = function () {
  return this.queue[this.queue.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.queue.length == 0;
};
