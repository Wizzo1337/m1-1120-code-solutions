/* exported toObject */
function toObject(keyValuePair) {
  if (keyValuePair[0] === 'firstName') {
    return { firstName: keyValuePair[1] };
  } else if (keyValuePair[0] === 'isCool') {
    return { isCool: keyValuePair[1] };
  } else if (keyValuePair[0] === 'employer') {
    return { employer: keyValuePair[1] };
  }
}
