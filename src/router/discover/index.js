export default {
  path:'/discover',
  name:'discover',
  component:(resolve) => require(['@/views/Discover'], resolve),
  children:[
    {
      path:'/discover/articleList',
      component:()=>import('@/views/Discover/articleList')
    },
    {
      path:'/discover/article/:articleId',
      component:()=>import('@/views/Discover/article')
    },
    {
      path:'/discover',
      redirect:'/discover/articleList'
    }
  ]
}
