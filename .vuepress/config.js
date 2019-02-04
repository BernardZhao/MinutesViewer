const dirTree = require('directory-tree');
const tree = dirTree("./bod/", { extensions: /\.md/ });

function dirMapper(tree) {
  let temp = {}
  if ("name" in tree) {
    temp.title = tree.name
  }
  if ("children" in tree) {
    temp.children = tree.children.map(dirMapper)
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
        // children: [
        //   {
        //     title: '2019',
        //     children: [
        //       {
        //         title: 'Spring',
        //         children: [
        //           "./bod/2019/Spring/2019-01-28.md"
        //           // {
        //           //   title: 'Spring',
        //           //   path: '/bod/2019/Spring/',
        //           // }
        //         ]
        //       }
        //     ]
        //   }
        // ]
        children: tree.children.map(dirMapper)
      }
    ]
  }
}
