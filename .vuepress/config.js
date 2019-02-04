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
        //path: '/bod/', /* Sidebar of current heading will be clickable like a route link */
        children: [
          {
            title: '2019',
            //path: '/bod/2019/', /* Sidebar of current heading will be clickable like a route link */
            children: [
              {
                title: 'Spring',
                path: '/bod/2019/Spring/', /* Sidebar of current heading will be clickable like a route link */
              }
            ]
          }
        ]
      }
    ]
  }
}
