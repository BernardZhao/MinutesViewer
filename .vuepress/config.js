const dirTree = require('directory-tree');

function dirMapper(tree) {
  let temp = {}
  if ("name" in tree) {
    temp.title = tree.name
  }
  if ("children" in tree) {
    temp.children = tree.children.map(dirMapper).reverse()
  } else {
    temp = tree.path
  }
  return temp
}

sidebar = [
  // Adding a new sidebar item simply requires adding a new object
  // with a title and target directory property.
  {
    title: "Board of Directors",
    target: "./bod"
  }
].map((item) => {
  item.children = dirTree(item.target, {
    extensions: /\.md/
  }).children.map(dirMapper).reverse()
  return item
})

module.exports = {
  title: 'Minutes',
  description: 'For viewing meeting notes',
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: sidebar
  }
}
