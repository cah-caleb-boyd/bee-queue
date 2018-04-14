module.exports = {
  base: '/',
  title: 'Bee-Queue',
  description: 'Redis-backed job queue for Node.js.',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  ga: '', // todo GA ID
  serviceWorker: true,
  themeConfig: {
    repo: 'bee-queue/bee-queue',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Examples',
        link: '/examples/',
      },
      {
        text: 'API Reference',
        link: '/api/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/examples/': [
        {
          title: 'Examples',
          collapsable: false,
          children: [
            '',
            'reusing-connections'
          ]
        },
      ]
    }
  }
}