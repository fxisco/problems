function parseTuple(tupleStr) {
  let items = tupleStr
    .replace(/^\(|\)$/g, "")
    .split(",")
    .map(Number);

  return items;
}

function TreeConstructor(strArr) {
  const tree = {};
  const children = {};

  for (let i = 0; i < strArr.length; i++) {
    const [child, parent] = parseTuple(strArr[i]);

    if (
      (tree[parent] && Object.keys(tree[parent]).length === 2) ||
      children[child]
    ) {
      return false;
    }

    tree[parent] = {
      ...tree[parent],
      [child]: child,
    };

    children[child] = child;
  }

  return true;
}

// keep this function call here
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
