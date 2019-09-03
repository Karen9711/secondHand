//包含二级路由
export default {
  path:'/search',
  name:'search',
  component:(resolve) => require(['@/views/Search'], resolve),
  children:[
    {
      path:'/search/detail/:id',
      name:'detail',
      components:{
        detail : ()=>import('@/components/Detail')
      }
    },
    {
      path:'/search/:kw',
      name:'searchResult',
      component:(resolve) => require(['@/components/itemLIst'], resolve)
    },
  ]
}
