export default [
  {
    path: '/',
    name: 'post.index',
    component: () => import('./views/PostIndex.vue')
  },

  {
    path: '/author/:id',
    name: 'post.author',
    component: () => import('./views/PostAuthor.vue')
  }
]
