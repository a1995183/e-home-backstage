import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const router=new Router({
  routes: [
    {
      path: '/',
      name:'党建后台管理系统',
      component:()=>import('@/views/home/layout'),
      redirect:'/home',
      children:[
        {
          path:'home',
          name:'首页',
      component:()=>import('@/views/home'),
       
        },
        {
          path:'userList',
          name:'用户列表',
          component:()=>import('@/views/user/userList.vue')
        },
        {
          path:'addUser',
          name:'adduser',
          component:()=>import('@/views/user/adduser'),
        },
        {
          path:'userEdit',
          name:'userEdit',
          component:()=>import('@/views/user/userEdit'),
        },
        // {
        //   path:'/addNews',
        //   name:'addNews',
        //   component:()=>import('@/views/news/addNewsList'),
        // },
        {
          path:'/addCategory',
          name:'addCategory',
          component:()=>import('@/views/news/addCategory'),
        },
        {
          path:'/newsList',
          name:'newsList',
          component:()=>import('@/views/news/newsList'),
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/login'),
    },
  
   
  ]
})
router.beforeEach((to,from,next)=>{
if(to.meta.title)
{
  document.title=to.meta.title
}
next()
})
export default router;