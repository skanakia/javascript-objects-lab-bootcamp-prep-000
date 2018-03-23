var recipes = {flour: '2 cups'}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, recipes, key: value)
}