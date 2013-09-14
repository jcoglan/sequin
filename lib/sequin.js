var Stream = function(sequence, bits) {
  bits = bits || 1;

  var binary = sequence.map(function(n) {
    n = n.toString(2);
    while (n.length < bits) n = '0' + n;
    return n;
  });

  this._bases = {
    '2': binary.join('').split('').map(function(b) { return parseInt(b, 2) })
  };
};

Stream.prototype.generate = function(n, base, inner) {
  base = base || 2;

  var value = n,
      k = Math.ceil(Math.log(n) / Math.log(base)),
      r = Math.pow(base, k) - n,
      chunk;

  loop: while (value >= n) {
    chunk = this._shift(base, k);
    if (!chunk) return inner ? n : null;

    value = this._evaluate(chunk, base);

    if (value >= n) {
      if (r === 1) continue loop;
      this._push(r, value - n);
      value = this.generate(n, r, true);
    }
  }
  return value;
};

Stream.prototype._evaluate = function(chunk, base) {
  var sum = 0,
      i   = chunk.length;

  while (i--) sum += chunk[i] * Math.pow(base, chunk.length - (i+1));
  return sum;
};

Stream.prototype._push = function(base, value) {
  this._bases[base] = this._bases[base] || [];
  this._bases[base].push(value);
};

Stream.prototype._shift = function(base, k) {
  var list = this._bases[base];
  if (!list || list.length < k) return null;
  else return list.splice(0,k);
};

module.exports = Stream;

