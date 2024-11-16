// src/stringUtils.js
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = {
  capitalize,
};
