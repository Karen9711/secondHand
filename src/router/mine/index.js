//包含二级路由
export default {
  path:'/mine',
  name:'mine',
  component:(resolve) => require(['@/views/Mine'], resolve),
  children:[
    {
      path:'login',
      name:'login',
      component:(resolve) => require(['@/components/Login'], resolve),
    },
    {
      path:'signup',
      name:'signup',
      component:(resolve) => require(['@/components/Signup'], resolve),
    },
    // {
    //   path:':id',
    //   name:'user',
    //   component:(resolve) => require(['@/components/User'], resolve),
    // },
    {
      path:'/mine/:id',
      components:{
        user:()=>import('@/components/User'),
      }
    },
    {
      path:'/mine',
      redirect:'/mine/login'
    }
  ]
}
