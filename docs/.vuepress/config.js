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
        ]
    },
    base: "/vuepress-example/"
}