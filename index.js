var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, recipes)
  newobj[key] = value
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

functi