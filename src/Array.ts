interface Array<T> {
  last: () => T;
}

Array.prototype.last = function () {
  return this.at(-1);
};
