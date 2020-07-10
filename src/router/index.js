import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/', 
    redirect:'/login'
  },
  {
    path:'/login',
    component:()=>import('../components/login/Login.vue')
  },
  {
    path: '/about',
    name: 'About', 
    component: () => import('../views/About.vue')
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import('../views/Home.vue'),
    children:[ 
      {path:'score',component:()=>import('../views/Score.vue')},
      {path:'comment',component:()=>import('../views/Comment.vue')},
      {path:'audit',component:()=>import('../views/Audit.vue')},
      {path:'scholarship',component:()=>import('../views/Scholarship.vue')},
      {path:'project',component:()=>import('../views/Project.vue')},
      {path:'auth',component:()=>import('../views/Authority.vue')}
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由导航守卫,控制页面跳转
// router.beforeEach((to,from,next)=>{
//   if(to.path==='/login') return next()
//   if(!window.sessionStorage.getItem('token')) return next('/login')
//   next()
// })

export default router
