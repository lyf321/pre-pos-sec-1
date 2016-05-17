function collect_same_elements(collection_a, collection_b) {
  var same_element = [];

  for (var i = 0; i < collection_a.length; i++) {
    var same = findCollection_b(collection_b, collection_a[i]);
    if (same) {
      same_element.push(same);
    }
  }

  return same_element;
}

function findCollection_b(collection_b, element) {
  var same;

  for (var i = 0; i < collection_b.length; i++) {
    if (collection_b[i] === element) {
      same = element;
    }
  }

  return same;
}
module.exports = collect_same_elements;
