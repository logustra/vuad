export default [
  {
    path: '/',
    name: 'post.index',
    component: () => import('./views/PostIndex.vue')
  },

  {
    path: '/post/:id',
    name: 'post.detail',
    component: () => import('./views/PostDetail.vue')
  },

  {
    path: '/author/:id',
    name: 'post.author',
    component: () => import('./views/PostAuthor.vue')
  }
]
