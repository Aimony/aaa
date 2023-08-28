import { defineConfig } from 'vitepress'

export default defineConfig({
    themeConfig: {
        sidebar: [
          {
            text: 'Article',
            items: [
              { text: '介绍', link: '/article/intro' },
              { text: '开始', link: '/article/begin' },
            ]
          },

        ]
      }
})

