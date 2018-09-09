module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'VuePress Example',
            description: 'Example of VuePress',
        },
        '/ja/': {
            lang: 'ja-JP',
            title: 'VuePress例',
            description: 'VuePressの例です。',
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/icon.png` }],
        ['meta', { name: 'theme-color', content: '#075fa9' }]
    ],
    themeConfig: {
        locales: {
            "/": {
                label: 'English',
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Sub directory', link: '/subdir/' },
                    { text: 'External', link: 'https://google.com' },
                ],
                sidebar: {
                    "/subdir/": [
                        ['', 'Sub Directory'],
                        ['foo', 'Foo']
                    ],
                    "/": [
                        ['introduction', 'Introduction'],
                        ['getting-started', 'Getting Started'],
                        ['component-example', 'Component Example'],
                        ['plantuml-example', 'PlantUML Example']
                    ]
                }
            },
            "/ja/": {
                label: '日本語',
                nav: [
                    { text: 'ホーム', link: '/ja/' },
                    { text: 'サブディレクトリ', link: '/ja/subdir/' },
                    { text: '外部リンク', link: 'https://google.com' },
                ],
                sidebar: {
                    "/ja/subdir/": [
                        ['', 'サブディレクトリ'],
                        ['foo', 'ふー']
                    ],
                    "/ja/": [
                        ['introduction', '紹介'],
                        ['getting-started', '入門'],
                        ['component-example', 'コンポーネント例'],
                        ['plantuml-example', 'PlantUML例']
                    ]
                }
            }
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