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
        }
    },
    base: "/vuepress-example/",
    markdown: {
        config: md => {
            md.use(require('markdown-it-plantuml'))
        }
    }
}