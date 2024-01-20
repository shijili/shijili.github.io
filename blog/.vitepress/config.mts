import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo/favicon-32x32.png' }],
    // ['style', {}, `body { font-family: 'KaiTi', serif; }`]
  ],
  title: "风云将起",
  description: "欢迎来到风云将起，这是一个分享快乐、智慧和经验的地方。在我们的生活中，每一次遇见都有其独特的意义，而缘分让这些相遇变得更加美好和珍贵。在这里，你可以找到那些触动你的故事、那些让你思考的话题以及那些启发你的灵感。我们期待你在这里的每一次相遇，都能带给你一份感动和收获。让我们共享这份缘分，一起见证每一个美好的瞬间。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/logo/vitepress-blog.png',
    outlineTitle:'文章目录',
    outline:[2,6],
    nav: [
      { text: '主页', link: '/' },
      {
        text: '技术',
        items: [
          { text: 'Vue', link: '/tech/vue/' },
          { text: 'Spring Boot', link: '/tech/spring-boot/' }
        ]
      },
      {
        text: '历史',
        items: [
          { text: '资治通鉴', link: '/history/zztj/' }
        ]
      },
      {
        text:'联系',link:'/contact/'
      }
    ],

    sidebar: {
      '/tech/': [
        {
          text: '技术',
          items: [
            { text: 'Vue', link: '/tech/vue/' },
            { text: 'Spring Boot', link: '/tech/spring-boot/' }
          ]
        }
      ],
      '/history/': [
        {
          text: '历史',
          items: [
            { text: '资治通鉴', link: '/history/zztj/' }
          ]
        }
      ],
      // ...其他侧边栏配置
    },
  //   sidebar: { "/tech/vue": set_sidebar("/tech/vue"),
  //        '/history/zztj':set_sidebar('/history/zztj')
  
  // },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright:'版权所有 © '
    }
  }
})
