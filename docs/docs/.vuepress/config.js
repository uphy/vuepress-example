module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Sub directory', link: '/subdir/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            "/subdir/": [
                ['/subdir/', 'Sub Directory'],
                ['/subdir/foo', 'Foo']
            ],
            "/": [
                ['/introduction', 'Introduction'],
                ['/getting-started', 'Getting Started'],
                ['/component-example', 'Component Example'],
                ['/plantuml-example', 'PlantUML Example']
            ]
        }
    },
    base: "/vuepress-example/",
    markdown: {
        config: md => {
            md.use(require('markdown-it-plantuml'))
        }
    }
}