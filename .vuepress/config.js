const dirTree = require('directory-tree');

const bodTree = dirTree("./bod/", {
  extensions: /\.md/
});

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

module.exports = {
  title: 'Minutes',
  description: 'For viewing meeting notes',
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: [
      {
        title: 'Board of Directors',
        children: bodTree.children.map(dirMapper).reverse()
      }
    ]
  }
}
