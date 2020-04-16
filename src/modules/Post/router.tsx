export default [
  {
    path: '/',
    name: 'post.index',
    component: () => import('./views/postIndex.vue')
  },

  {
    path: '/post/:id',
    name: 'post.detail',
    component: () => import('./views/postDetail.vue')
  },

  {
    path: '/author/:id',
    name: 'post.author',
    component: () => import('./views/postAuthor.vue')
  }
]
