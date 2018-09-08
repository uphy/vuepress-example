module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Sub directory', link: '/subdir/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            ['/Introduction', 'Introduction'],
            ['/GettingStarted', 'Getting Started'],
            ['/ComponentExample', 'Component Example'],
            ['/PlantUMLExample', 'PlantUML Example']
        ]
    },
    base: "/vuepress-example/",
    markdown: {
        config: md => {
            md.use(require('markdown-it-plantuml'))
        }
    }
}