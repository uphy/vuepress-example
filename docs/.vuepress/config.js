module.exports = {
    locales: {
        "/": {
            lang: 'en-US',
            title: 'hello',
            description: 'say \'hello\' to your console',
        },
        "/ja/": {
            lang: 'ja-JP',
            title: 'hello',
            description: 'あなたのコンソールに\'hello\'を',
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        locales: {
            "/": {
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'GitHub', link: 'https://github.com/uphy/vuepress-example/' },
                ],
                sidebar: [
                    ["/getting-started", "Getting Started"]
                ]
            },
            "/ja/": {
                nav: [
                    { text: 'ホーム', link: '/ja/' },
                    { text: 'GitHub', link: 'https://github.com/uphy/vuepress-example/' },
                ],
                sidebar: [
                    ["/getting-started", "導入"]
                ]
            },
        },

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