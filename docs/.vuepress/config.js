module.exports = {
    title: 'hello',
    description: 'say \'hello\' to your console',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/uphy/vuepress-example/' },
        ],
        sidebar: [
            ["/getting-started", "Getting Started"]
        ],
        algolia: {
            appId: "9C8M17C3B5",
            apiKey: "8e885406d82049ded59f013a5d972c5f",
            indexName: "test_vuepress_example"
        }
    },
    base: "/vuepress-example/",
    markdown: {
        config: md => {
            md.use(require('markdown-it-plantuml'))
        }
    }
}