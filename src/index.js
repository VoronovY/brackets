module.exports = function check(str, bracketsConfig) {
  // your solution
  const hash = {};
  const stack = [];

  for (let [openBracket, closedBracket] of bracketsConfig) {
    hash[openBracket] = closedBracket;
  }

  for (let i = 0; i < str.length; i++) {
    if (
      (hash[str[i]] === str[i] && !stack.includes(str[i])) ||
      (hash[str[i]] && hash[str[i]] !== str[i])
    ) {
      stack.push(hash[str[i]]);
    } else {
      const lastEl = stack.pop();
      if (lastEl !== str[i]) return false;
    }
  }

  return stack.length === 0;
};
