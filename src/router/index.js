import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const register = () => import('../views/login/register.vue')
const PostNew = () => import('../views/login/PostNew.vue')
const RemarkNews = () => import('../views/login/RemarkNews.vue')
const enter = () => import('../views/main/enter.vue')
const HomePage = () => import('../components/context/HomePage/HomePage.vue')
const Live = () => import('../components/context/Live/Live.vue')
const LocalMusic = () => import('../components/context/LocalMusic/LocalMusic.vue')
const MusicControl = () => import('../components/context/MusicControl/MusicControl.vue')
const MyCollections = () => import('../components/context/MyCollections/MyCollections.vue')
const MyMusicCloud = () => import('../components/context/MyMusicCloud/MyMusicCloud.vue')
const Personal = () => import('../components/context/PersonalFM/PersonalFM.vue')
const Video = () => import('../components/context/Video/Video.vue')
const Friend = () => import('../components/context/Friend/Friend.vue')
// const CreateCollection = () => import('../components///context/CreateCollections/CreateCollection.vue')
const Fris = () => import('../components/common/Fris/Fris.vue')
const SearchMusic = () => import('../components/common/searchContent/SearchMusic.vue')
const routes = [
  {
    path:  '',
    redirect: '/register'
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/PostNew',
    component: PostNew
  },
  {
    path: '/RemarkNews',
    component: RemarkNews
  },
  {
    path: '/enter',
    component: enter,
    children:[
      {
         path:'',
        redirect: '/HomePage'
      },
      {
        path:'/HomePage',
        component: HomePage
      },
      {
        path: '/Live',
        component: Live
      },
      {
        path: '/LocalMusic',
        component: LocalMusic
      },
      {
        path: '/MusicControl',
        component: MusicControl
      },
      {
        path: '/MyCollections',
        component: MyCollections
      },
      {
        path: '/MyMusicCloud',
        component: MyMusicCloud
      },
      {
        path: '/Personal',
        component: Personal
      },
      {
        path: '/Video',
        component: Video
      },
      {
        path: '/Friend',
        component: Friend
      },
      {
        path: '/Fris',
        component: Fris
      },
      {
        path: '/SearchMusic',
        component: SearchMusic
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
